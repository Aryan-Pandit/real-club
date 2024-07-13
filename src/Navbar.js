// src/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = ({ language, translations }) => {
  const navTranslations = translations || {
    home: 'Home',
    news: 'News',
    watch: 'Watch',
    stats: 'Stats',
    about: 'About Us',
    quiz: 'Quiz'
  };

  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/" className="logo-link" activeClassName="active-link" exact>
          <img src="/assets/logo.png" alt="Real Club" className="logo-img" />
          <span className="logo-text">Real Club</span>
        </NavLink>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/news" className="nav-link" activeClassName="active-link" exact>
              <img src="/assets/news.png" alt="News Icon" /> {navTranslations.news}
            </NavLink>
          </li>
          <li>
            <NavLink to="/watch" className="nav-link" activeClassName="active-link" exact>
              <img src="/assets/watch.png" alt="Watch Icon" /> {navTranslations.watch}
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className="nav-link" activeClassName="active-link" exact>
              <img src="/assets/stats.png" alt="Stats Icon" /> {navTranslations.stats}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active-link" exact>
              <img src="/assets/aboutus.png" alt="About Us Icon" /> {navTranslations.about}
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz" className="nav-link" activeClassName="active-link" exact>
              <img src="/assets/quiz.png" alt="Quiz Icon" /> {navTranslations.quiz}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
