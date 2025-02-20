import React, { useEffect, useRef, useState } from 'react';
import './DrivingTrackPage.css';

function DrivingTrackPage() {
  // Reference for the new section
  const tracksRef = useRef(null);
  const [tracksVisible, setTracksVisible] = useState(false);

  useEffect(() => {
    // Dynamically cycle through the sections every 5 seconds
    const sections = document.querySelectorAll('.driving-skill-section');
    let currentIndex = 0;

    const interval = setInterval(() => {
      sections.forEach((section) => section.classList.remove('active'));
      sections[currentIndex].classList.add('active');
      currentIndex = (currentIndex + 1) % sections.length;
    }, 5000);

    // Show "Training and Testing Tracks" section when it scrolls into view
    const handleScroll = () => {
      const rect = tracksRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setTracksVisible(true);
      } else {
        setTracksVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="driving-track-page">
      {/* Gradient Track Section */}
            {/* Training and Testing Tracks Section */}
            <section
        ref={tracksRef}
        className={`about-tracks ${tracksVisible ? 'visible' : ''}`}
      >
        <h1>Training and Testing Tracks Details</h1>
        <table className="tracks-table">
          <thead>
            <tr>
              <th>Track Name</th>
              <th>Running Length (in meters)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Parallel Parking</td><td>40.00</td><td>For parking LMV & HMV</td></tr>
            <tr><td>Angular Parking (60°)</td><td>50.00</td><td>For parking LMV & HMV at 60°</td></tr>
            <tr><td>Perpendicular Parking</td><td>50.00</td><td>For parking LMV & HMV at 90°</td></tr>
            <tr><td>H-Track</td><td>160.20</td><td>Training for forward and reversing in typical conditions on an H-shaped track (LMV & HMV)</td></tr>
            <tr><td>8-Track</td><td>165.22</td><td>Training for left and right steering, sharp turning, and negotiating roundabouts (LMV & HMV)</td></tr>
            <tr><td>Gradient Track</td><td>82.00</td><td>Hill track to practice uphill and downhill driving (LMV & HMV)</td></tr>
            <tr><td>Reverse Box</td><td>50.00</td><td>Training for reversing and turning (LMV & HMV)</td></tr>
            <tr><td>3-Point and 5-Point Track</td><td>125.00</td><td>Training on difficult turns on restricted roads (LMV & HMV)</td></tr>
            <tr><td>2-Wheeler Track</td><td>60.00</td><td>Training for left and right movement, sharp turning, and roundabouts (Two-wheelers)</td></tr>
            <tr><td>Straight Road</td><td>450.00</td><td>For LMV & HMV training</td></tr>
          </tbody>
        </table>
        <p><strong>Total Track Length:</strong> 1232.42 meters</p>
      </section>

      <section className="driving-skill-section animated fade-in">
        <h2>Gradient Track</h2>
        <img src="/images/IMG-20241112-WA0054.jpg" alt="Gradient Track" className="driving-skill-image" />
        <p>Test your ability to control the vehicle on steep inclines and declines. This skill helps you master techniques like hill starts, proper gear usage, and controlled braking, ensuring safety on sloped roads.</p>
      </section>

      {/* Perpendicular Parking Section */}
      <section className="driving-skill-section animated fade-in">
        <h2>Perpendicular Parking</h2>
        <img src="/images/IMG-20241112-WA0052.jpg" alt="Perpendicular Parking" className="driving-skill-image" />
        <p>Learn to position your vehicle perfectly in a perpendicular parking spot. This skill is essential for navigating crowded parking lots and teaches you to align your vehicle within the marked lines efficiently.</p>
      </section>

      {/* Reverse Box Section */}
      <section className="driving-skill-section animated fade-in">
        <h2>Reverse Box</h2>
        <img src="/images/IMG-20241112-WA0050.jpg" alt="Reverse Box" className="driving-skill-image" />
        <p>Reverse your vehicle into a designated box-shaped area with accuracy. This exercise is crucial for improving spatial awareness and mastering reverse gear techniques for real-world parking scenarios.</p>
      </section>

      {/* 3-Point Turn Section */}
      <section className="driving-skill-section animated fade-in">
        <h2>3-Point Turn</h2>
        <img src="/images/IMG-20241112-WA0047.jpg" alt="3-Point Turn" className="driving-skill-image" />
        <p>Master the 3-point turn, a fundamental maneuver for changing directions on narrow roads. This skill emphasizes controlled steering, proper gear shifting, and assessing the surrounding environment.</p>
      </section>

      {/* S-Point Turn Section */}
      <section className="driving-skill-section animated fade-in">
        <h2>S-Point Turn</h2>
        <img src="/images/IMG-20241112-WA0046.jpg" alt="S-Point Turn" className="driving-skill-image" />
        <p>Navigate tight curves with the S-point turn technique. This exercise helps drivers maintain smooth control and precise turns, making it ideal for challenging road layouts and parking structures.</p>
      </section>

      {/* Parallel Parking Section */}
      <section className="driving-skill-section animated fade-in">
        <h2>Parallel Parking</h2>
        <img src="/images/IMG-20241112-WA0045.jpg" alt="Parallel Parking" className="driving-skill-image" />
        <p>Master parallel parking to position your vehicle accurately between two parked cars. This skill ensures you can park confidently in tight spaces while avoiding obstacles and adhering to proper road etiquette.</p>
      </section>

      {/* H Track Section moved to the last */}
      <section className="driving-skill-section animated fade-in">
        <h2>H Track</h2>
        <img src="/images/IMG-20241112-WA0049.jpg" alt="H Track" className="driving-skill-image" />
        <p>The H track challenges drivers to maneuver through tight spaces and sharp turns. Practicing on this track improves precision steering, clutch control, and overall vehicle handling in constrained environments.</p>
      </section>


    </div>
  );
}

export default DrivingTrackPage;
