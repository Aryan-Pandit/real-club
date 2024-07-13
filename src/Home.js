import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Real Club of Football</title>
      </Helmet>
      <main className="main-section">
        <h1>Real Club of Football</h1>
        <div className="stadium-container">
          <img src="/assets/stadium.jpg" alt="Stadium" className="stadium-image" />
          <div className="quiz-overlay">
            <h2>Try our quiz now!</h2>
            <a href="/quiz" className="quiz-button">Quiz</a>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 Real Club of Football. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
