import React, { useState } from 'react';
import './AppointmentForm.css'; // Import a CSS file for styling

function AppointmentForm() {
  // Initialize state to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    car: '',
    message: ''
  });

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log the form data to the console
    console.log(formData);

    // Send the form data to the backend API endpoint
    try {
      const response = await fetch('http://localhost:5000/submit-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        alert('Appointment submitted successfully');
      } else {
        alert('Failed to submit appointment');
      }

      // Reset the form fields after submission (optional)
      setFormData({
        name: '',
        email: '',
        course: '',
        car: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form');
    }
  };

  return (
    <div className="appointment-container">
      {/* Image Section */}
      <div className="appointment-images">
        <img
          src="/images/IMG-20241112-WA0019.jpg"
          alt="Driving instructor with student"
          className="appointment-image-small"
        />
        <img
          src="/images/IMG-20241112-WA0017.jpg"
          alt="Happy student driver"
          className="appointment-image-large"
        />
      </div>

      {/* Form Section */}
      <div className="appointment-form">
        <h3 className="appointment-heading">APPOINTMENT</h3>
        <h2 className="appointment-title">Make An Appointment To Pass Test & Get A License On The First Try</h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Courses Type"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Car Type"
              name="car"
              value={formData.car}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-row">
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
