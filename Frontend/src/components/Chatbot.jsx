import React, { useState, useEffect, useRef } from 'react';
import '../Style/ChatBotCSS.css'; // Import the CSS file for styling

const predefinedResponses = {
    "apple": "Apples are sweet, crisp fruits that come in various colors such as red, green, and yellow. They are high in fiber and vitamin C.",
    "banana": "Bananas are long, yellow fruits that are rich in potassium and vitamin B6. They are great for a quick energy boost.",
    "orange": "Oranges are juicy, tangy fruits that are a great source of vitamin C. They are often eaten fresh or used in juices.",
    "strawberry": "Strawberries are red, juicy berries that are high in antioxidants and vitamin C. They are often used in desserts and salads.",
    "grape": "Grapes come in clusters and can be red, green, or purple. They are high in antioxidants and can be eaten fresh or used to make wine.",
    "pineapple": "Pineapples are tropical fruits with a spiky exterior and sweet, tangy flesh. They are rich in vitamin C and digestive enzymes.",
    "mango": "Mangoes are tropical fruits with sweet, golden flesh and a large pit. They are high in vitamins A and C and are great for smoothies.",
    "blueberry": "Blueberries are small, round berries that are rich in antioxidants and vitamin C. They are often used in baked goods and smoothies.",
    "kiwi": "Kiwis are small, brown fruits with a green interior and tiny black seeds. They are high in vitamin C and fiber."
};

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatBoxRef = useRef(null);

    useEffect(() => {
        chatBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = { text: input, type: 'user' };
        setMessages([...messages, newMessage]);

        setInput('');

        try {
            // Check for predefined responses first
            const responseText = predefinedResponses[input.toLowerCase()] || "I'm sorry, I don't understand that.";
            const botMessage = { text: responseText, type: 'bot' };
            setMessages([...messages, newMessage, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = { text: "Sorry, something went wrong.", type: 'bot' };
            setMessages([...messages, newMessage, errorMessage]);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbox">
              <h2>Ask about some given fruits like apple, banana, kiwi</h2>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`}>
                        {msg.text}
                    </div>
                ))}
                <div ref={chatBoxRef}></div>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
