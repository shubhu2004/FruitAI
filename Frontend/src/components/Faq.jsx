import React, { useState, useEffect } from 'react';
import faqService from '../Services/faqservice.jsx';
import '../Style/FaqCSS.css'; // Import the CSS file for styling

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editingFaq, setEditingFaq] = useState(null);
  const [editQuestion, setEditQuestion] = useState('');
  const [editAnswer, setEditAnswer] = useState('');

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    const data = await faqService.getFaqs();
    setFaqs(data);
  };

  const addFaq = async () => {
    await faqService.createFaq(newQuestion, newAnswer);
    fetchFaqs();
    setNewQuestion('');
    setNewAnswer('');
  };

  const handleEdit = (faq) => {
    setEditingFaq(faq);
    setEditQuestion(faq.question);
    setEditAnswer(faq.answer);
  };

  const updateFaq = async () => {
    if (editingFaq) {
      await faqService.updateFaq(editingFaq.id, editQuestion, editAnswer);
      fetchFaqs();
      setEditingFaq(null);
      setEditQuestion('');
      setEditAnswer('');
    }
  };

  const deleteFaq = async (id) => {
    await faqService.deleteFaq(id);
    fetchFaqs();
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Fruit FAQs</h1>
      <div className="faq-input-container">
        <input 
          type="text" 
          className="faq-input" 
          placeholder="Add new FAQ question" 
          value={newQuestion} 
          onChange={(e) => setNewQuestion(e.target.value)} 
        />
        <textarea
          className="faq-input"
          placeholder="Add answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button className="faq-button add-button" onClick={addFaq}>Add FAQ</button>
      </div>

      {editingFaq && (
        <div className="faq-edit-container">
          <input 
            type="text" 
            className="faq-input edit-input" 
            value={editQuestion} 
            onChange={(e) => setEditQuestion(e.target.value)} 
          />
          <textarea
            className="faq-input edit-input"
            value={editAnswer}
            onChange={(e) => setEditAnswer(e.target.value)}
          />
          <button className="faq-button update-button" onClick={updateFaq}>Update FAQ</button>
        </div>
      )}

      <ul className="faq-list">
        {faqs.map((faq) => (
          <li key={faq.id} className="faq-item">
            <div className="faq-content">
              <span className="faq-question">{faq.question}</span>
              <p className="faq-answer">{faq.answer}</p>
            </div>
            <div className="faq-buttons">
              <button className="faq-button edit-button" onClick={() => handleEdit(faq)}>Edit</button>
              <button className="faq-button delete-button" onClick={() => deleteFaq(faq.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
