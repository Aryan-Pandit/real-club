// src/WatchPage.js

import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';
const WatchPage = () => {
  return (
    <div>
      <Helmet>
        <title>Watch Live!</title>
      </Helmet>
      <main className="watch-section">
        <h1>Watch the Team Live</h1>
        <h2>Click Play</h2>
        <div className="livestream-container">
          <iframe
            className="livestream-embed"
            src="https://www.youtube.com/embed/2V_k8IZEYQw"
            title="Live Stream"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Real Club of Football. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WatchPage;
