import React, { useState, useEffect, useRef } from 'react';
import InfoCard from '../components/InfoCard';
import './AboutPage.css';

// Hook to check if an element is visible on the screen
function useOnScreen(ref, threshold = 0.1) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isIntersecting;
}

function AboutPage() {
  // References for sections
  const introRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const objectivesRef = useRef(null);
  const benefitsRef = useRef(null);
  const organizationRef = useRef(null);
  const collaborationRef = useRef(null);
  const facilitiesRef = useRef(null);

  // Visibility states using the custom hook
  const introVisible = useOnScreen(introRef);
  const visionVisible = useOnScreen(visionRef);
  const missionVisible = useOnScreen(missionRef);
  const objectivesVisible = useOnScreen(objectivesRef);
  const benefitsVisible = useOnScreen(benefitsRef);
  const organizationVisible = useOnScreen(organizationRef);
  const collaborationVisible = useOnScreen(collaborationRef);
  const facilitiesVisible = useOnScreen(facilitiesRef);

  // State for each facility's image index
  const [simulatorIndex, setSimulatorIndex] = useState(0);
  const [classroomIndex, setClassroomIndex] = useState(0);
  const [dormitoryIndex, setDormitoryIndex] = useState(0);

  // Images for each facility
  const simulatorImages = [
    "images/IMG-20241112-WA0020.jpg",
    "images/IMG-20241112-WA0023.jpg",
    "images/IMG-20241112-WA0017.jpg"
  ];
  const classroomImages = [
    "images/IMG-20241112-WA0035.jpg",
    "images/IMG-20241112-WA0027.jpg",
    "images/IMG-20241112-WA0037.jpg"
  ];
  const dormitoryImages = [
    "images/Wh.jpg",
    "images/i.jpg",
    "images/IMG-20241112-WA0031.jpg"
  ];

  // Automatically cycle through carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatorIndex((prevIndex) => (prevIndex + 1) % simulatorImages.length);
      setClassroomIndex((prevIndex) => (prevIndex + 1) % classroomImages.length);
      setDormitoryIndex((prevIndex) => (prevIndex + 1) % dormitoryImages.length);
    }, 5000); // Change images every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [simulatorImages.length, classroomImages.length, dormitoryImages.length]);

  // Carousel functions
  const handleNext = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (setIndex, images) => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="about-container">
      <section
        ref={introRef}
        className={`about-intro ${introVisible ? 'visible' : ''}`}
      >
        <h2>About RDTC</h2>
        <InfoCard
          title="Introduction to RDTC"
          content="The Regional Driving Training Center (RDTC) in Singawal, Ajmer, has been established by the Ministry
            of Road Transport & Highways (MoRTH), Government of India, under the IDTR/RDTC scheme of the 14th Financial
            Approved and sanctioned by MoRTH on 10.03.2021, the center became operational on 23.03.2024.
            The project was developed under a Public-Private Partnership (PPP) model in collaboration with the Rajasthan Sadak Suraksha Society (RSSS), a prominent NGO focused on road safety in Rajasthan. Since its inception, RSSS has educated over one million youth and trained 85,000 “Road Safety Ambassadors.” The management and operations of RDTC are overseen by Vahan Chalak Kaushal Vikas Sansthan (VCKVS), a non-government organization registered under the Rajasthan Society Registration Act, 1958, and recognized under sections 80G and 12A of the Income Tax Act, 1961, as well as the Trust Act and CSR1. 
            RDTC Singawal is dedicated to providing world-class driver training programs that promote safe driving and significantly reduce road accidents and fatalities in India.
            The center was completed and became operational on 
            23rd March 2024."
          isButtonVisible={false}
        />
      </section>

      <section
        ref={missionRef}
        className={`about-mission ${missionVisible ? 'visible' : ''}`}
      >
        <h3>Mission</h3>
        <ul>
          <li>RDTC is committed to providing the highest quality of training and education to all individuals.</li>
          <li>To build on our reputation as the leading driver training organization in India.</li>
          <li>To remain at the forefront of road safety awareness.</li>
          <li>Our certified Trainers find the kinds of jobs in Government and Private sectors that will provide secure futures for themselves and their families.</li>
        </ul>
      </section>
      
<div className="training-partners-section">
  <h2>We Are Training Partners</h2>
  <p>
  "We are proud to be Training Partners with esteemed organizations, including the following Sector Skill Councils:
    <strong> ASDC</strong>, <strong>LSC</strong>, <strong>NSDC</strong>, and others."
  </p>
  <div className="partner-logos">
    <img src="/images/sdc-logo.jpg" alt="LSC Logo" className="partner-logo" />
    <img src="/images/lsc-logo.jpg" alt="NSDC Logo" className="partner-logo" />
    <img src="/images/db-logo.jpg" alt="NSDC Logo" className="partner-logo" />
    <img src="/images/tuv logo.jpg" alt="ASDC Logo" className="partner-logo" />
    <img src="/images/nsdc-logo.jpg" alt="NSDC Logo" className="partner-logo" />
  </div>
</div>
      <section
        ref={objectivesRef}
        className={`about-objectives ${objectivesVisible ? 'visible' : ''}`}
      >
        <h3>Objectives</h3>
        <ul>
          <li>To conduct driving training courses for LMV driving for the public.</li>
          <li>To conduct driving training courses for HMV driving for the public.</li>
          <li>To conduct refresher and orientation Training courses for drivers who are in service.</li>
          <li>To conduct periodic training and evaluation of drivers of State transport Undertakings.</li>
          <li>To organize road safety awareness.</li>
        </ul>
      </section>
      <section
        ref={facilitiesRef}
        className={`about-facilities ${facilitiesVisible ? 'visible' : ''}`}
      >
        <h3>Facilities</h3>
        <div className="facilities-list">
          <div className="facility-item">
            <h4>Advanced Simulators</h4>
            <p>For light motor vehicles (LMV), heavy motor vehicles (HMV), and two-wheelers, providing real-world training experiences.</p>
            <div className="carousel">
              <button className="carousel-button left" onClick={() => handlePrev(setSimulatorIndex, simulatorImages)}>‹</button>
              <img src={simulatorImages[simulatorIndex]} alt="Simulator" className="carousel-image" />
              <button className="carousel-button right" onClick={() => handleNext(setSimulatorIndex, simulatorImages)}>›</button>
            </div>
          </div>
          <div className="facility-item">
            <h4>Classrooms</h4>
            <p>Equipped with advanced tools for theoretical instruction, ensuring that all drivers learn both safe driving techniques and road safety principles.</p>
            <div className="carousel">
              <button className="carousel-button left" onClick={() => handlePrev(setClassroomIndex, classroomImages)}>‹</button>
              <img src={classroomImages[classroomIndex]} alt="Classroom" className="carousel-image" />
              <button className="carousel-button right" onClick={() => handleNext(setClassroomIndex, classroomImages)}>›</button>
            </div>
          </div>
          <div className="facility-item">
            <h4>Dormitories</h4>
            <p>Comfortable and secure accommodations for out-of-town trainees.</p>
            <div className="carousel">
              <button className="carousel-button left" onClick={() => handlePrev(setDormitoryIndex, dormitoryImages)}>‹</button>
              <img src={dormitoryImages[dormitoryIndex]} alt="Dormitory" className="carousel-image" />
              <button className="carousel-button right" onClick={() => handleNext(setDormitoryIndex, dormitoryImages)}>›</button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={benefitsRef}
        className={`about-benefits ${benefitsVisible ? 'visible' : ''}`}
      >
        <h3>Benefits</h3>
        <ul>
          <li>Access to expert trainers with years of experience.</li>
          <li>Certified courses recognized by government agencies.</li>
          <li>Advanced training methods using simulators and real-world scenarios.</li>
          <li>State-of-the-art infrastructure for an immersive learning experience.</li>
          <li>Comprehensive road safety education and awareness.</li>
        </ul>
      </section>
      <div className="horizontal-sections">
        <section
          ref={visionRef}
          className={`about-vision ${visionVisible ? 'visible' : ''}`}
        >
          <h3>Vision</h3>
          <p>To become a pioneer in driver education and safety, fostering road safety awareness in every corner of India.</p>
        </section>
        <section
          ref={organizationRef}
          className={`about-organization ${organizationVisible ? 'visible' : ''}`}
        >
          <h3>Organization</h3>
          <p>We are supported by the government of India and our key partners, which include leading industry players in the transportation sector.</p>
        </section>

        <section
        ref={collaborationRef}
        className={`about-collaboration ${collaborationVisible ? 'visible' : ''}`}
      >
        <h3>Collaborations</h3>
        <p>We work in partnership with various organizations dedicated to road safety and driver education, both on a national and regional scale.</p>
      </section>
      </div>

    </div>
  );
}

export default AboutPage;
