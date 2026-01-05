import streamlit as st
import google.generativeai as genai
st.write(f"Debug: Google Library Version is {genai.__version__}")
import time
import os
import tempfile

# 1. CONFIGURATION
st.set_page_config(page_title="Framework Builder", page_icon="🧠")
st.title("🧠 Video to Process Builder")

api_key = st.secrets.get("GEMINI_API_KEY") 
if not api_key:
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        st.error("🚨 API Key missing! Please add it to secrets.toml")
        st.stop()

genai.configure(api_key=api_key)

# 2. HELPER FUNCTIONS
def upload_to_gemini(path, mime_type="video/mp4"):
    """Uploads the file to Gemini and waits for processing."""
    with st.spinner("⬆️ Uploading to Gemini (this may take a moment)..."):
        file = genai.upload_file(path, mime_type=mime_type)
        
        # Poll for processing completion
        while file.state.name == "PROCESSING":
            time.sleep(5)
            file = genai.get_file(file.name)
            
        if file.state.name != "ACTIVE":
            raise Exception("Video failed to process")
            
        return file

# 3. APP INTERFACE
st.markdown("YouTube blocks cloud servers, so **download the video to your computer first**, then upload it here.")

# The File Uploader
uploaded_file = st.file_uploader("Upload your video file (MP4)", type=["mp4", "mov", "avi"])

user_context = st.text_area("Who are you? (e.g., 'I am a busy parent trying to meal prep')", height=100)

if st.button("🚀 Build My Framework") and uploaded_file and user_context:
    try:
        # Save the uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as tmp_file:
            tmp_file.write(uploaded_file.read())
            video_path = tmp_file.name

        # Upload to Gemini
        gemini_file = upload_to_gemini(video_path)
        
        st.info("🤖 AI is watching the video...")
        
        # The Prompt
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
        st.error(f"An error occurred: {e}")



