import React from 'react';
import { Link } from 'react-router-dom';
import { SiGoogletranslate } from "react-icons/si";
import '../Style/HomeCSS.css'; // Import custom CSS

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Fruit.AI</h1>
      <p className="subtitle">"Be Healthy!"</p>
      
      <div className="grid-container">
        <Link to="/chatbot" className="grid-item chat">
          <span>ChatBot</span>
        </Link>
        <Link to="/translator" className="grid-item translate">
          <span><SiGoogletranslate /></span>
        </Link>
        <Link to="/faq" className="grid-item faq">
          <span>FAQs</span>
        </Link>
        <Link to="/about" className="grid-item about">
          <span>About</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
