import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HMVCoursePage.css';

const HMVCoursePage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="hmv-course-page">
      <h1>Heavy Motor Vehicle Training Course (HMV)</h1>
      <p>
        Generally, drivers of heavy motor vehicles come from cleaner stages having a lack of knowledge in Traffic Rules and Regulations, driving skills, and vehicle maintenance. This course aims to address these gaps. Below are the subjects offered:
      </p>
      <h2>Syllabus (Prescribed by Ministry of Road Transport & Highways - GOI)</h2>

      <h3>Theory</h3>
      <ul>
        <li>Driving Theory: (2 Hours)</li>
        <li>Traffic Education: (2 Hours)</li>
        <li>Vehicle Mechanism Theory: (2 Hours)</li>
        <li>Vehicle Maintenance and Repair: (1 Hour)</li>
        <li>Public Relation: (1 Hour)</li>
        <li>First Aid and Human Psychology: (1 Hour)</li>
        <li>Road Rage and Stress Management: (2 Hours)</li>
        <li>Causes, Types & Driver’s Responsibility in the Event of an Accident: (2 Hours)</li>
        <li>AIDS awareness: Tobacco & Alcohol: (1 Hour)</li>
        <li>Pollution and Environment: (1 Hour)</li>
        <li>Driving Fuel Efficiency: (1 Hour)</li>
        <li>Total Duration: 16 Hours</li>
      </ul>

      <h3>Practical</h3>
      <ul>
        <li>Driving Practice: (30 Hours)</li>
        <li>Basic Mechanism, Maintenance & Repairs: (10 Hours)</li>
        <li>Total Duration: 40 Hours</li>
      </ul>

      <h3>Total Duration of Course</h3>
      <p>21 Days</p>

      {/* Go Back Button */}
      <button 
        className="go-back-button" 
        onClick={() => navigate('/')}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default HMVCoursePage;
