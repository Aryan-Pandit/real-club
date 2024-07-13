import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import './styles.css';

const Article2 = () => {
  const speakText = () => {
    const articleText = document.getElementById('article-content').innerText;
    const footerText = document.getElementById('footer-content').innerText;
    const fullText = `${articleText} ${footerText}`;
    const speech = new SpeechSynthesisUtterance(fullText);
    speech.lang = 'en-US'; // Set language to English
    window.speechSynthesis.speak(speech);
  };

  const speakHoverText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US'; // Set language to English
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    const handleMouseEnter = (event) => {
      const text = event.target.alt || event.target.innerText || event.target.textContent;
      if (text) {
        speakHoverText(text);
      }
    };

    const navLinks = document.querySelectorAll('.nav-link, .logo-link img, .logo-link .logo-text');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Courtois Back from Injury</title>
      </Helmet>
      <main className="article-section">
        <button
          onClick={speakText}
          onMouseEnter={() => speakHoverText('Read Page')}
          className="read-button"
          aria-label="Read article"
        >
          Read Page
        </button>
        <article aria-labelledby="article-title" aria-describedby="article-description" id="article-content">
          <header>
            <h1 id="article-title">Courtois Back from Injury</h1>
          </header>
          <img
            src="/assets/courtois.jpg"
            alt="Thibaut Courtois"
            className="article-image"
            onMouseEnter={() => speakHoverText('Thibaut Courtois')}
          />
          <p id="article-description">
            Thibaut Courtois expressed his happiness at feeling like a goalkeeper again after his return, 268 days post-injury. He thanked the fans for their warmth following his comeback in a match against Cádiz at Santiago Bernabéu, almost nine months after suffering a ruptured anterior cruciate ligament in his left knee, and a later injury to his right knee meniscus. After training with his teammates, Courtois played in the LaLiga matchday 34 clash and received a standing ovation from the fans. In an interview, he described the day as very nice, expressing joy for contributing to the team's win and keeping a clean sheet. Courtois highlighted the support from his teammates, especially Militão, and expressed gratitude to his physios Davide and Giuseppe for their efforts in his recovery. He also looked forward to an important upcoming game against Dortmund, urging fans to come out in support.
          </p>
        </article>
      </main>
      <footer className="footer" id="footer-content">
        <p>© 2024 Real Club of Football. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Article2;
