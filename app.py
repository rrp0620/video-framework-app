import streamlit as st
import google.generativeai as genai
import time
import yt_dlp
import os
import tempfile

# 1. SETUP PAGE
st.set_page_config(page_title="Framework Builder", page_icon="🧠")
st.title("🧠 Video to Process Builder")

# 2. API KEY SETUP
# This looks for the key in Streamlit Secrets (Cloud) or Environment (Local)
api_key = st.secrets.get("GEMINI_API_KEY") 
if not api_key:
    # Fallback for local testing if you didn't set up secrets.toml yet
    api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    st.error("🚨 API Key missing! Please add it to secrets.toml")
    st.stop()

genai.configure(api_key=api_key)

# 3. CORE FUNCTIONS
def download_video(url):
    with st.spinner("⏳ Downloading video from YouTube..."):
        temp_dir = tempfile.mkdtemp()
        output_template = os.path.join(temp_dir, '%(title)s.%(ext)s')
        ydl_opts = {'format': 'best[ext=mp4]', 'outtmpl': output_template, 'quiet': True}
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=True)
            return ydl.prepare_filename(info)

def upload_to_gemini(path):
    with st.spinner("⬆️ Uploading to Gemini AI..."):
        file = genai.upload_file(path, mime_type="video/mp4")
        
        # Wait for processing
        while file.state.name == "PROCESSING":
            time.sleep(5)
            file = genai.get_file(file.name)
            
        if file.state.name != "ACTIVE":
            raise Exception("Video failed to process")
            
        return file

# 4. APP INTERFACE
url = st.text_input("Paste YouTube URL here:")
user_context = st.text_area("Who are you? (e.g. 'I am a student trying to study better')", height=100)

if st.button("🚀 Build My Framework") and url and user_context:
    try:
        # Step A: Get Video
        video_path = download_video(url)
        
        # Step B: Give to Gemini
        gemini_file = upload_to_gemini(video_path)
        
        # Step C: Ask the Question
        st.info("🤖 AI is watching the video and thinking...")
        
        prompt = f"""
        Watch this video and extract the main framework or method.
        Then, apply it specifically to this user: "{user_context}".
        
        Output format:
        1. THE METHOD (Summary)
        2. THE PERSONALIZED PLAN (Step-by-step for this user)
        """
        
        model = genai.GenerativeModel(model_name="gemini-1.5-flash")
        response = model.generate_content([gemini_file, prompt])
        
        st.markdown(response.text)
        
    except Exception as e:
        st.error(f"Something went wrong: {e}")
