import React, { useState, useEffect } from 'react';
import './styles.css';

const ToggleSwitch = ({ language, onToggle }) => {
  const [isToggled, setIsToggled] = useState(language === 'FR');

  useEffect(() => {
    setIsToggled(language === 'FR');
  }, [language]);

  const handleToggle = () => {
    const newLanguage = isToggled ? 'EN' : 'FR';
    setIsToggled(!isToggled);
    onToggle(newLanguage);
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className="toggle-labels">
        <span className={`label ${!isToggled ? 'active' : ''}`}>English</span>
        <span className={`label ${isToggled ? 'active' : ''}`}>Français</span>
      </div>
      <div className={`slider ${isToggled ? 'toggled' : ''}`}></div>
    </div>
  );
};

export default ToggleSwitch;
