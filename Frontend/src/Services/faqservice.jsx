const API_URL = 'http://localhost:5000/faqs';

const getFaqs = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const getFaq = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('FAQ not found');
  return response.json();
};

const createFaq = async (question, answer) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, answer })
  });
  if (!response.ok) throw new Error('Failed to create FAQ');
  return response.json();
};

const updateFaq = async (id, question, answer) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, answer })
  });
  if (!response.ok) throw new Error('Failed to update FAQ');
  return response.json();
};

const deleteFaq = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete FAQ');
  return response.json();
};

export default { getFaqs, getFaq, createFaq, updateFaq, deleteFaq };
