import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <main className="about-section">
        <h1>About Us</h1>
        <p>Real Club is a Spanish football club based in Madrid with 15 European Cups & 36 League titles.</p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.893510335609!2d-3.688334684237566!3d40.45305487936178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sSantiago%20Bernabeu!5e0!3m2!1sen!2ses!4v1623930211745!5m2!1sen!2ses"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Santiago Bernabeu Map"
          ></iframe>
        </div>
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>Q: Where can I find the latest news about Real Club?</h3>
            <p>A: You can find the latest news in the News section of our website. Stay updated with transfer news, team updates, and more.</p>
          </div>
          <div className="faq-item">
            <h3>Q: How can I watch live matches of Real Club?</h3>
            <p>A: Visit the Watch section of our website to stream live matches. We provide links to official streaming services.</p>
          </div>
          <div className="faq-item">
            <h3>Q: Where can I see the player statistics?</h3>
            <p>A: You can view player statistics in the Stats section of our website. Filter by position and stats type to find specific information.</p>
          </div>
          <div className="faq-item">
            <h3>Q: How do I participate in the Real Club quiz?</h3>
            <p>A: Click on the Quiz button on the homepage to test your knowledge about Real Club. Answer multiple-choice questions and see how well you score.</p>
          </div>
          <div className="faq-item">
            <h3>Q: Can I add comments on player stats?</h3>
            <p>A: Yes, you can add comments on player stats in the Stats section. Simply type your comment and press enter.</p>
          </div>
          <div className="faq-item">
            <h3>Q: How can I edit or delete my comments on player stats?</h3>
            <p>A: You can edit or delete your comments by clicking the "Edit" or "Delete" button next to your comment.</p>
          </div>
          <div className="faq-item">
            <h3>Q: From what season are the stats from?</h3>
            <p>A: The stats are from the 2023/2024 season.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 Real Club of Football. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
