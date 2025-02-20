import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoCard from '../components/InfoCard';
import LatestNews from '../components/LatestNews';
import './Home.css';

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Array of image paths for the carousel
  const images = [
    'images/IMG-20241112-WA0039.jpg',
    'images/IMG-20241112-WA0035.jpg',
    'images/news.jpg',
    'images/IMG_1810.jpg',
    'images/IMG-20241112-WA0019.jpg',
    'images/IMG-20241112-WA0022.jpg',
    'images/IMG-20241112-WA0040.jpg',
    'images/IMG-20241112-WA0016.jpg',
    'images/ground.jpg'
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

   // The handleLearnMore function
  const handleLearnMore = (title, content, images) => {
    console.log('Navigating to details with:', { title, content, images });
    navigate('/details', {
      state: {
        title,
        content: JSON.stringify(content),
        images,
        adminView: true, // Optional: Admin view flag
      },
    });
  };


  const handleLearnMoreCTA = () => {
    navigate('/about');  // Navigate to the About page when button is clicked
  };
  return (
    <div className="homepage-container">
      <h1 className="hero-title">Welcome to RDTC Singawal Driving & Training Center</h1>
      <h1 className="hero-title">
  <div className="sliding-text-container">
    <span className="sliding-text">
      Empowering your journey with expert driver training and cutting-edge road safety education.
    </span>
  </div>
</h1>

      <header className="hero-section">
        <div className="carousel">
          <button onClick={handlePrevImage} className="carousel-button prev">
            &#10094;
          </button>
          <img
            src={images[currentImageIndex]}
            alt="RDTC Hero"
            // className={hero-image ${currentImageIndex === 0 ? 'active' : ''}}
            className={`hero-image ${currentImageIndex === 0 ? 'active' : ''}`}

          />
          <button onClick={handleNextImage} className="carousel-button next">
            &#10095;
          </button>
        </div>

      </header>

            {/* About Section */}
            <section className="about-section">
        <div>
          <h2>About RDTC Singawal</h2>
          <p>
            The Regional Driving Training Center (RDTC) in Singawal, Ajmer,is a key initiative by the Ministry of Road Transport & Highways (MoRTH),
            Government of India, established under the IDTR/RDTC scheme of the 14th Financial Circle (2017-18 to 2020-21). Approved and sanctioned by MoRTH on 10.03.2021, the center became operational on 23.03.2024. The project was developed under a Public-Private Partnership (PPP) model in collaboration with the Rajasthan Sadak Suraksha Society (RSSS), a prominent NGO focused on road safety in Rajasthan. Since its inception, RSSS has educated over one million youth and trained 85,000 “Road Safety Ambassadors.” The management and operations of RDTC are overseen by Vahan Chalak Kaushal Vikas Sansthan (VCKVS), a non-government organization registered under the Rajasthan Society Registration Act, 1958, and recognized under sections 80G and 12A of the Income Tax Act, 1961, as well as the Trust Act and CSR1.
          </p>
          <p>
            RDTC Singawal is dedicated to providing world-class driver training programs that promote safe driving and significantly reduce road accidents and fatalities in India.
          </p>
        </div>
      </section>


      <div className="features-container">
        <InfoCard
          title="Experienced Instructors"
          content="Learn from certified professionals who bring years of expertise in road safety and driving."
          onLearnMore={() => navigate('/administration')}
        />

        <InfoCard
          title="Modern Infrastructure"
          content="State-of-the-art facilities for an immersive learning experience."
          onLearnMore={() => handleLearnMore(
            "Modern Infrastructure",
            "Our facilities include modern classrooms, simulation labs, and a test track designed for practical learning.",
            ['images/IMG-20241112-WA0025.jpg', 'images/IMG-20241112-WA0020.jpg', 'images/IMG-20241112-WA0034.jpg', 'images/IMG-20241112-WA0022.jpg', 'images/IMG-20241112-WA0033.jpg', 'images/IMG-20241112-WA0023.jpg',
              'images/IMG-20241112-WA0055.jpg', 'images/IMG-20241112-WA0026.jpg', 'images/IMG-20241112-WA0029.jpg', 'images/IMG-20241112-WA0019.jpg']
          )}
        />

<InfoCard
  title="Government Approved"
  content="All courses are certified by the Ministry of Road Transport & Highways, GOI."
  onLearnMore={() => navigate('/GovernmentApproved')}
/>
      </div>

      
      {/* Updated Features Section */}
      <section className="features-section">
  <h2>Why Choose Us?</h2>
  <div className="sliding-text-container">
    <div className="sliding-text">
      Knowing how to drive a car is no longer a luxury; it's a necessity!
    </div>
  </div>
  <div className="why-choose-us-container">
    <div className="why-choose-us-image">
      <img src="/images/IMG-20241112-WA0017.jpg" alt="Why Choose Us" />
    </div>
    <div className="why-choose-us-content">
      <p><strong>We Help, To Pass Test & Get A License On The First Try</strong></p>
      <p>Let us be your driving force to success!</p>
      <p>Our proven methods and expert instructors are dedicated to getting you test-ready and license-certified on your very first attempt.</p>
      <p>Don't waste time or money on multiple tries. Join us and experience the thrill of hitting the road confidently with your hard-earned license in hand.</p>
      <p><strong>With a Government Approved syllabus</strong>, don’t just learn to drive. We’ll also teach you about the vehicle, its parts, and how they work.</p>
      <p>We are a government-authorized and licensed Driving Centre with modern infrastructure, affordable fees, and the best experienced driving instructors.</p>
    </div>
  </div>
</section>

  {/* Video Section */}
  <div className="video-container">
  <video
    controls
    loop
    className="homepage-video"
    // style={{ marginTop: '0px' }}
  >
    <source src="/videos/R_viedo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      {/* Updated Explore Our Courses Section */}
      <section className="courses-section">
        <div className="courses-header">
          <h2 className="courses-heading">Explore Our Courses</h2>
        </div>
        <p className="courses-header">
          Choose Your Course to Drive With Confidence On The Road.
        </p>
        <p className="courses-description">
          Our meticulously designed courses help transform beginners into skilled and confident drivers. Choose your desired course from a range of driving training courses and master the skill of driving at RDTC Singawal Driving School.
        </p>
        <div className="features-container">
        <InfoCard
          title="Heavy Motor Vehicle Training"
          content="Comprehensive 21-day program designed to make you a skilled HMV driver under the official syllabus."
          onLearnMore={() => navigate('/hmv-course')}
        />
          <InfoCard
            title="Light Motor Vehicle Training"
            content="Quick and effective 21-day course for beginners and experienced drivers to master light vehicles."
            onLearnMore={() => navigate('/lmv-course')}
          />
          <InfoCard
            title="Motorcycle Training"
            content="Learn how to ride a motorcycle with confidence, tailored for new riders."
            onLearnMore={() => navigate('/motorcycle-course')}
          />
        </div>

      </section>

{/* Horizontal Layout for Latest News, Join Us, and New Tab */}
<section className="horizontal-layout">
  <div className="horizontal-section latest-news">
    <LatestNews />
  </div>
  <div className="horizontal-section cta">
    <h2>Join Us for a Safer Tomorrow</h2>
    <p>
      Whether you're a new driver or an experienced professional, RDTC offers tailored programs to enhance your skills. Get started with us today and be part of the road safety revolution.
    </p>
    <p>
      We believe in providing hands-on experience, and our training sessions are designed to teach you essential skills that can save lives, reduce accidents, and improve traffic safety. Our focus is on building responsible, skilled, and safe drivers.
    </p>
    <p>
      By choosing RDTC, you're investing in your safety and the safety of others. Join us today and take the first step toward a better and safer tomorrow.
    </p>
    <button className="cta-button" onClick={handleLearnMoreCTA}>
      Learn More
    </button>
  </div>
  <div className="horizontal-section new-tab">
    <h2>Additional Features</h2>
    <p>Explore more about our advanced offerings and services.</p>
    <ul className="benefits-list">
      <li>Access to expert trainers with years of experience.</li>
      <li>State-of-the-art facilities for both practical and theoretical training.</li>
      <li>Improved road safety and reduced accident rates.</li>
      <li>Career opportunities for graduates in the road transport industry.</li>
    </ul>
    <button
      className="new-tab-button"
      onClick={() => navigate('/about')}
    >
      Discover More
    </button>
  </div>
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


    </div>
  );
}

export default HomePage;