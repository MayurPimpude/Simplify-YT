from flask import Flask, render_template, request, jsonify
import os
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from youtube_transcript_api import YouTubeTranscriptApi
from dotenv import load_dotenv
from easygoogletranslate import EasyGoogleTranslate
from langdetect import detect

translator = EasyGoogleTranslate()
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()
api_key = "AIzaSyAfItvxFBe_CzrjqOokhzkBEoHMpNyvOb8"
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_subtitle(youtubelink):
    video_id=youtubelink.split("=")[1]
    # retrieve the available transcripts
    transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)

    # iterate over all available transcripts
    for transcript in transcript_list:

        # fetch the actual transcript data
        Org_TS=transcript.fetch()

        # translating the transcript will return another transcript object
        data = transcript.translate('en').fetch()

    final_list = [item['text'] for item in data]

# Convert the list to a single string
    text = ' '.join(final_list)

    # Print the result
    print(text)
    
    return text


def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks


def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=api_key)
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")


def get_conversational_chain():

    prompt_template = """
    Answer the question as detailed as possible from the provided context, make sure to provide all the details, if the answer is not in
    provided context just say, "answer is not available in the context", don't provide the wrong answer, also provide summary if asked on based context\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.1)

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain


# def user_input(user_question):
#     embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001")
    
#     new_db = FAISS.load_local("faiss_index", embeddings)
#     docs = new_db.similarity_search(user_question)

#     chain = get_conversational_chain()
    
#     response = chain(
#         {"input_documents":docs, "question": user_question}
#         , return_only_outputs=True)

#     print(response)
    # st.write("Reply: ", response["output_text"])

@app.route('/', methods=['POST','GET'])
def link():
    data = request.get_json()
    youtubelink = data.get('videoUrl', '')
    print(youtubelink)
    raw_text = get_subtitle(youtubelink)
    text_chunks = get_text_chunks(raw_text)
    get_vector_store(text_chunks)
    print(raw_text)
        
    return jsonify({'summary': f'Summarizing video with URL: {youtubelink}'})


@app.route('/summary', methods=['POST','GET'])
def user_input():
    data = request.get_json()
    user_question = data.get('text', '')

    source=(detect(user_question))
    # print(source)
    result = translator.translate(user_question, target_language='en')

    
    # print(result)
    # print(finalresult)

    embeddings = GoogleGenerativeAIEmbeddings(model = "models/embedding-001", google_api_key="AIzaSyAfItvxFBe_CzrjqOokhzkBEoHMpNyvOb8")
    
    new_db = FAISS.load_local("faiss_index", embeddings)
    docs = new_db.similarity_search(result)

    chain = get_conversational_chain()
    
    response = chain(
        {"input_documents":docs, "question": result}
        , return_only_outputs=True)

    # print(response)
    chatbot_response = response["output_text"]

    finalresult=translator.translate(chatbot_response,target_language=source)

    return jsonify({'user_message': user_question, 'chatbot_response': finalresult})


if __name__ == '__main__':
    app.run(debug=True)
