import React from 'react';
import './Gallery.css'; // Assuming you have styles in App.css

function Gallery() {
  // Array of image paths for the gallery
  const images = [
    { src: 'images/news.jpg', alt: 'News' },
    { src: 'images/AC3.jpg', alt: 'Event 1' },
    { src: 'images/AC2.png', alt: 'Event 2' },
    { src: 'images/Ac1.png', alt: 'Announcement' },
  ];

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
