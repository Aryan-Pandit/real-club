import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';
const NewsPage = () => {
  return (
    <div>
      <Helmet>
        <title>News</title>
      </Helmet>
      
      <main className="news-section">
        <h1>News</h1>
        <div className="news-container">
          <div className="news-item">
            <h2>Transfer News</h2>
            <a href="/article1">
              <div className="news-image" style={{ backgroundImage: "url('/assets/mbappe.jpeg')" }}>
                <p>Mbappé signs for Real Club</p>
              </div>
            </a>
          </div>
          <div className="news-item">
            <h2>Team News</h2>
            <a href="/article2">
              <div className="news-image" style={{ backgroundImage: "url('/assets/courtois.jpg')" }}>
                <p>Courtois back from injury</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
