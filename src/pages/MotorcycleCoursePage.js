import React from 'react';
import './MotorcycleCoursePage.css'; 

const MotorcycleCoursePage = () => {
  return (
    <div className="motorcycle-course-page">
      <h1>Two-Wheeler Motorcycle Training</h1>
      <h2>Motorcycle Training Course</h2>
      <p>
        The Two-Wheeler Motorcycle Training course is designed for beginners who want to learn how to drive a two-wheeler motorcycle safely and efficiently. The course covers traffic rules, vehicle handling, and practical driving sessions.
      </p>

      <h3>Syllabus</h3>
      <h4>Theory</h4>
      <ul>
        <li>Driving Theory</li>
        <li>Traffic Education</li>
        <li>Vehicle Mechanism Theory</li>
      </ul>

      <h4>Practical</h4>
      <ul>
        <li>Driving Practice</li>
      </ul>

      <h3>Total Duration of Course</h3>
      <p>1 Week</p>

      <button className="go-back-button" onClick={() => window.location.href = '/'}>
        Go Back to Home
      </button>
    </div>
  );
};

export default MotorcycleCoursePage;
