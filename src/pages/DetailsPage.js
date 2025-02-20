import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DetailsPage.css';

function DetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Destructure the state to get title, content, and images
  const { title, content, images } = state || {};

  // If no state or required data is provided, show an error and navigate back to home
  if (!title || !content || !images || !Array.isArray(images) || images.length === 0) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>No details available. Please go back to the homepage.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  // Parse content if it's stringified HTML/JSX
  let parsedContent;
  try {
    parsedContent = JSON.parse(content);
  } catch (e) {
    parsedContent = content; // In case it's not a valid JSON
  }

  return (
    <div className="details-page-container">
      <h1 className="details-title">{title}</h1>

      <section className="details-content">
        {/* Render parsed content */}
        <div>{parsedContent}</div>
      </section>

      <div className="details-image-gallery">
        {images.map((image, index) => (
          <div key={index} className="details-image-wrapper">
            <img src={image} alt={`Image ${index + 1}`} className="details-image" />
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default DetailsPage;
