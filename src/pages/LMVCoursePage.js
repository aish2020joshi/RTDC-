import React from 'react';
import './LMVCoursePage.css'; 

const LMVCoursePage = () => {
  return (
    <div className="lmv-course-page">
      <h1>Light Motor Vehicle Training (LMV)</h1>
      <h2>Light Motor Vehicle Training Course (LMV)</h2>
      <p>
        The Light Motor Vehicle (LMV) Driving course offers comprehensive training on safe and efficient driving techniques. It covers traffic rules, vehicle mechanics, and practical driving sessions.
      </p>

      <h3>Syllabus (Prescribed by Ministry of Road Transport & Highways - GOI)</h3>

      <h4>Theory</h4>
      <ul>
        <li>Driving Theory</li>
        <li>Traffic Education</li>
        <li>Vehicle Mechanism Theory</li>
        <li>Vehicle Maintenance and Repair</li>
      </ul>

      <h4>Practical</h4>
      <ul>
        <li>Driving Practice</li>
        <li>Basic Mechanism, Maintenance & Repairs</li>
      </ul>

      <h3>Total Duration of Course</h3>
      <p>21 Days</p>

      <button className="go-back-button" onClick={() => window.location.href = '/'}>
        Go Back to Home
      </button>
    </div>
  );
};

export default LMVCoursePage;
