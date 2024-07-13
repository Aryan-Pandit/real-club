// src/Article1.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';
import ToggleSwitch from './ToggleSwitch';

function loadLocaleData(language) {
  switch (language) {
    case 'EN':
      return import('./locales/en.json');
    case 'FR':
      return import('./locales/fr.json');
    default:
      return import('./locales/en.json');
  }
}

const Article1 = ({ language, handleLanguageChange, translations }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadLocaleData(language);
      setContent(data.default);
    };
    fetchData();
  }, [language]);

  return (
    <div>
      <ToggleSwitch language={language} onToggle={handleLanguageChange} />
      <Helmet>
        <title>{content.title}</title>
      </Helmet>
      <main className="article-section">
        <h1>{content.title}</h1>
        <img src="/assets/mbappe.jpeg" alt="Mbappé" className="article-image" />
        <p>{content.article}</p>
      </main>
      <footer className="footer">
        <p>{translations.footer}</p>
      </footer>
    </div>
  );
};

export default Article1;
