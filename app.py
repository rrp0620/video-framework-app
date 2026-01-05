import streamlit as st
import google.generativeai as genai

st.title("🔍 Model Scanner")

# 1. Setup Key
api_key = st.secrets.get("GEMINI_API_KEY")
genai.configure(api_key=api_key)

# 2. Scan for available models
st.write("Scanning your API Key for available models...")

try:
    found_any = False
    for m in genai.list_models():
        # We only care about models that can generate content
        if 'generateContent' in m.supported_generation_methods:
            st.success(f"✅ AVAILABLE: {m.name}")
            found_any = True
            
    if not found_any:
        st.error("❌ No models found. Your API Key might be invalid or your region is blocked.")

except Exception as e:
    st.error(f"Scanner Error: {e}")
