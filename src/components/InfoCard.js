// src/components/InfoCard.js
import React from 'react';
import '../App.css';

function InfoCard({ title, content, onLearnMore, isButtonVisible = true }) {
  return (
    <div className="info-card">
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-content">{content}</p>
      {isButtonVisible && (
        <button className="info-card-button" onClick={onLearnMore}>
          Learn More
        </button>
      )}
    </div>
  );
}

export default InfoCard;
