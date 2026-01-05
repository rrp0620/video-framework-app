import streamlit as st
import google.generativeai as genai
import time
import os
import tempfile

# --- CONFIGURATION ---
st.set_page_config(page_title="Deep Research Partner", page_icon="🧠", layout="wide")
st.title("🧠 Deep Research Partner")

api_key = st.secrets.get("GEMINI_API_KEY") 
if not api_key:
    api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    st.error("🚨 API Key missing! Please add it to secrets.toml")
    st.stop()

genai.configure(api_key=api_key)

# --- SESSION STATE (Memory) ---
if "messages" not in st.session_state:
    st.session_state.messages = []
if "chat_session" not in st.session_state:
    st.session_state.chat_session = None
if "video_processed" not in st.session_state:
    st.session_state.video_processed = False

# --- SIDEBAR: CONTEXT SETUP ---
with st.sidebar:
    st.header("1. The Source Material")
    uploaded_file = st.file_uploader("Upload Video (MP4)", type=["mp4", "mov"])
    
    st.header("2. Your Goal")
    user_context = st.text_area(
        "Who are you & what are you building?", 
        value="I am a no-code builder looking to create a SaaS product. I want to use the strategy in this video to find a niche market and distribution partner.",
        height=150
    )
    
    reset_btn = st.button("🔄 Start New Research Session")
    if reset_btn:
        st.session_state.messages = []
        st.session_state.chat_session = None
        st.session_state.video_processed = False
        st.rerun()

# --- FUNCTIONS ---
def process_video_and_start_chat(video_file):
    """Uploads video and initializes the chat session."""
    with st.spinner("Processing video... (This happens only once)"):
        # Save temp file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as tmp:
            tmp.write(video_file.read())
            video_path = tmp.name

        # Upload to Gemini
        gemini_file = genai.upload_file(video_path, mime_type="video/mp4")
        
        # Wait for processing
        while gemini_file.state.name == "PROCESSING":
            time.sleep(2)
            gemini_file = genai.get_file(gemini_file.name)
            
        if gemini_file.state.name != "ACTIVE":
            st.error("Video failed to process.")
            return

        # Initialize the Chat Model
        # We give it a 'System Prompt' to define its personality
        system_instruction = f"""
        You are an expert Research Partner and Business Strategist.
        You have access to a video that the user has uploaded.
        
        USER CONTEXT: "{user_context}"
        
        YOUR GOAL:
        1. Analyze the video deeply to find frameworks, strategies, and hidden insights.
        2. Help the user apply these specific insights to their own context.
        3. Be proactive. Don't just answer; suggest connections, risks, and next steps.
        """
        
        model = genai.GenerativeModel(
            model_name="gemini-2.5-flash", 
            system_instruction=system_instruction
        )
        
        # Start the chat with the video attached
        st.session_state.chat_session = model.start_chat(
            history=[
                {
                    "role": "user",
                    "parts": [gemini_file, "Analyze this video and be ready to discuss it."]
                },
                {
                    "role": "model",
                    "parts": ["I have watched the video and analyzed the strategy. How can we apply this to your project?"]
                }
            ]
        )
        
        st.session_state.video_processed = True

# --- MAIN LOGIC ---

# 1. Check if we need to process the video
if uploaded_file and not st.session_state.video_processed:
    if st.button("▶️ Analyze Video & Start Chat"):
        process_video_and_start_chat(uploaded_file)
        st.rerun()

# 2. Chat Interface
if st.session_state.video_processed:
    # Display History
    for msg in st.session_state.messages:
        with st.chat_message(msg["role"]):
            st.markdown(msg["content"])

    # Input Box
    if prompt := st.chat_input("Ask a deep question (e.g., 'How can I apply this distribution strategy to the pet industry?')"):
        # Show User Message
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)

        # Generate Reply
        with st.chat_message("assistant"):
            with st.spinner("Thinking deeply..."):
                response = st.session_state.chat_session.send_message(prompt)
                st.markdown(response.text)
        
        # Save Assistant Message
        st.session_state.messages.append({"role": "assistant", "content": response.text})

else:
    # Welcome Screen
    if not uploaded_file:
        st.info("👈 Upload a video in the sidebar to begin your research session.")
