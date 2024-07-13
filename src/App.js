import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NewsPage from './NewsPage';
import WatchPage from './WatchPage';
import Article1 from './Article1';
import Article2 from './Article2';
import Navbar from './Navbar';
import AboutPage from './AboutPage';
import StatsPage from './StatsPage';
import QuizPage from './QuizPage';
import './styles.css'; 

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

function App() {
  const [language, setLanguage] = useState('EN');
  const [translations, setTranslations] = useState({ navbar: {}, footer: '' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadLocaleData(language);
      setTranslations(data.default);
    };
    fetchData();
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <div className="App">
        <Navbar language={language} translations={translations.navbar} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/article1" element={
              <Article1
                language={language}
                handleLanguageChange={handleLanguageChange}
                translations={translations}
              />
            } />
            <Route path="/article2" element={<Article2 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
