import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  // Load stored images from localStorage
  const storedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];

  // State for images
  const [images, setImages] = useState(storedImages);

  // Save images to localStorage when updated
  useEffect(() => {
    localStorage.setItem('galleryImages', JSON.stringify(images));
  }, [images]);

  // Convert image file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle image upload
  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const newImages = await Promise.all(
      Array.from(files).map(async (file) => ({
        src: await convertToBase64(file),
        alt: file.name,
      }))
    );

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
  };

  // Function to clear all images
  const clearGallery = () => {
    localStorage.removeItem('galleryImages');
    setImages([]); // Clear state
  };

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      
      {/* Gallery Grid */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Upload Section (Now Below Images) */}
      <div className="upload-section">
        <input 
          type="file" 
          accept="image/*" 
          multiple 
          onChange={handleImageUpload} 
          className="upload-input"
        />
        <button onClick={clearGallery} className="clear-button">
          Clear Gallery
        </button>
      </div>
    </div>
  );
}

export default Gallery;
