import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GovernmentApproved.css';

function GovernmentApproved() {
  const navigate = useNavigate();

  // Content and images for the page
  const title = "Government Approved";
  const content = `
    RDTC 'Vahan Chalak Kaushal Vikas Sansthan' represents a pioneering approach to road safety and driver training in India. By combining rigorous training protocols with community outreach and awareness, VCKVS is making substantial contributions to reducing traffic-related accidents and fatalities.
    
    Through this initiative, VCKVS aims to build a safer and more responsible driving culture, positioning itself as a leader in road safety.
    
    All our courses meet the standards set by the Ministry of Road Transport & Highways, ensuring quality and reliability.
    
    The Regional Driving Training Center (RDTC), Singawal, Ajmer, has been established by the Ministry of Road Transport & Highways (MoRTH), Govt. of India under the IDTR/RDTC scheme of the 14th Financial Circle (2017-18 to 2020-21) as a road safety initiative. India’s First RDTC Singawal, Ajmer, was approved and sanctioned by MoRTH, Govt. of India, on 10.03.2021. The RDTC Center was completed and became operational on 23-03-2024.
    
    The RDTC Project was established in collaboration with the Rajasthan Sadak Suraksha Society (RSSS) as a PPP model. RSSS is a prominent NGO dedicated to promoting road safety in Rajasthan. Since 2013, RSSS has educated over one million youth on road safety practices and has trained 85,000 individuals as 'Road Safety Ambassadors.'
  `;

  const images = [
    'images/news.jpg',
  ];

  return (
    <div className="government-approved-container">
      <h1 className="government-approved-title">{title}</h1>
      <section className="government-approved-content">
        <p>{content}</p>
      </section>
      <div className="government-approved-gallery">
        {images.map((image, index) => (
          <div key={index} className="government-approved-image-wrapper">
            <img src={image} alt={`Government Approved ${index + 1}`} className="government-approved-image" />
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default GovernmentApproved;
