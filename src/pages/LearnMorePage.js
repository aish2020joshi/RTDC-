import React from 'react';
import { useLocation } from 'react-router-dom';
import './LearnMorePage.css';

function LearnMorePage() {
  const location = useLocation();
  const { title, content, images, adminView } = location.state || {}; // Destructure passed state

  return (
    <div className="learn-more-page">
      <h1>{title || 'Learn More'}</h1>
      <div className="learn-more-content">
        <p>{content ? JSON.parse(content) : 'No additional information available.'}</p>

        {images && images.length > 0 && (
          <div className="learn-more-images">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Learn More ${index + 1}`} />
            ))}
          </div>
        )}
      </div>

      {/* Conditionally render admin-specific content */}
      {adminView && (
        <div className="admin-section">
          <h2>Administrative View</h2>
          <p>
            This is the administrative section where you can add or modify content for
            "{title}".
          </p>
          <button onClick={() => alert('Admin: Edit Feature Coming Soon!')}>
            Edit Content
          </button>
        </div>
      )}
    </div>
  );
}

export default LearnMorePage;
