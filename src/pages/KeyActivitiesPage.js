import React from 'react';
import '../App.css';

function KeyActivitiesPage() {
  return (
    <div className="key-activities-container">
      <h2>Key Activities at RDTC</h2>

      {/* Image added here */}
      <div className="image-container">
        <img
          src="images/IMG_1802.jpg"
          alt="Key Activities at RDTC"
          className="key-activities-image"
        />
      </div>

      <ul>
        <li className="interactive-item"><strong>Driver Training Programs:</strong> Comprehensive courses for new and experienced drivers across various vehicle types, with additional modules for commercial operators.</li>
        <li className="interactive-item"><strong>Road Safety Education Campaigns:</strong> Workshops and awareness campaigns targeting schools, colleges, and rural areas to foster safe driving practices.</li>
        <li className="interactive-item"><strong>Skill Development Courses:</strong> Practical training on topics such as traffic rules, vehicle maintenance, and fuel-efficient driving.</li>
        <li className="interactive-item"><strong>Health and Safety Audits:</strong> Regular eye and health checkups, operational safety audits, and emergency response training.</li>
        <li className="interactive-item"><strong>Research and Behavioral Change Initiatives:</strong> Studies focused on modifying risky behaviors to create safer roads.</li>
        <li className="interactive-item"><strong>Employment-Focused Certifications:</strong> In partnership with the National Skill Development Corporation (NSDC) and sector skill councils like ASDC and LSC, VCKVS provides certifications enhancing job opportunities domestically and internationally.</li>
      </ul>

      {/* New Section for Free One Day Training Programme */}
      <div className="training-program">
        <h3>Free One Day Training Programme for HMV Drivers</h3>
        <p><strong>Regional Driving Training Center in Singawal</strong>, under the joint aegis of Shri Ram Sewa Sankalp & D.B. Skill, is conducting a free one-day driver refresher training and certification program for heavy vehicle drivers:</p>
        <p>In this program, drivers from surrounding regions are mobilized by RDTC. To provide convenience and save time, drivers can register in advance on the center's registered mobile number to book a slot online or offline. This allows them to come on the scheduled date for their training.</p>

        <h4>Program Schedule:</h4>
        <ul>
          <li><strong>Screening & Enrolment of Driver:</strong> In the morning, drivers are registered. Tea is provided, and all drivers receive a free kit, including a bag, blanket, cap, and T-shirt. Each driver is also registered and provided with an ABHA Insurance Card (5 Lac insurance).</li>
          <li><strong>Theoretical Class:</strong> A smart class is conducted where drivers receive essential information related to road safety, including vehicle knowledge, road signals, road signs, road markings, duties of drivers, right of way, Good Samaritan Laws, Hit & Run Scheme, driving regulations, offenses, and penalties. Lunch is provided to all drivers.</li>
          <li><strong>CBT Exam:</strong> A Computer-Based Test (CBT) is conducted by LSC. All passed candidates receive the NSQF Commercial Vehicle Driver NSQF Level-4 (Course QP Number LSC/ASC/Q9703) Certification under the Skill Development and Training Programme of the National Skill Development Corporation (NSDC).</li>
        </ul>
        <h4>Impact:</h4>
        <p>To date, more than <strong>5000 drivers</strong> have completed the one-day refresher training program for drivers, significantly enhancing road safety in the region.</p>
      </div>
    </div>
  );
}

export default KeyActivitiesPage;
