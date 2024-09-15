import React, { useState } from 'react';
import axios from 'axios';
import '../Style/TranslatorCSS.css';

function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish

  // MyMemory API translation function
  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${inputText}&langpair=en|${targetLanguage}`
      );
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setTargetLanguage(e.target.value);
  };

  return (
    <div className="translator-fullscreen">
      <div className="translator-wrapper">
        <h2 className="translator-title">Translate Your Text</h2>
        <div className="input-group">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type text here..."
            rows="4"
          ></textarea>
        </div>

        <div className="select-group">
          <label htmlFor="language">Translate to: </label>
          <select
            id="language"
            value={targetLanguage}
            onChange={handleLanguageChange}
          >
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="hi">Hindi</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        <button className="translate-button" onClick={translateText}>
          Translate
        </button>

        <div className="output-group">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      </div>
    </div>
  );
}

export default Translator;
