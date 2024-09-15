from flask import Flask, jsonify, request,send_from_directory
from flask_cors import CORS
import os
app = Flask(__name__)
CORS(app)


faqs = [
    {"id": 1, "question": "What is an Apple?", "answer": "An apple is a round fruit with red, green, or yellow skin."},
    {"id": 2, "question": "How much Vitamin C is in an Orange?", "answer": "Oranges are high in Vitamin C, providing about 70 mg per 100 grams."},
]
@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

@app.route('/faqs/<int:faq_id>', methods=['GET'])
def get_faq(faq_id):
    faq = next((f for f in faqs if f['id'] == faq_id), None)
    if faq is None:
        return jsonify({"error": "FAQ not found"}), 404
    return jsonify(faq)

@app.route('/faqs', methods=['POST'])
def create_faq():
    data = request.get_json()
    if 'question' not in data or 'answer' not in data:
        return jsonify({"error": "Question and answer are required"}), 400
    new_faq = {
        'id': len(faqs) + 1,
        'question': data['question'],
        'answer': data['answer']
    }
    faqs.append(new_faq)
    return jsonify(new_faq), 201

@app.route('/faqs/<int:faq_id>', methods=['PUT'])
def update_faq(faq_id):
    data = request.get_json()
    faq = next((f for f in faqs if f['id'] == faq_id), None)
    if faq is None:
        return jsonify({"error": "FAQ not found"}), 404
    if 'question' in data:
        faq['question'] = data['question']
    if 'answer' in data:
        faq['answer'] = data['answer']
    return jsonify(faq)

@app.route('/faqs/<int:faq_id>', methods=['DELETE'])
def delete_faq(faq_id):
    global faqs
    faqs = [f for f in faqs if f['id'] != faq_id]
    return jsonify({"message": "FAQ deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
