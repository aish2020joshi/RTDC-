import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Quick Links Section */}
          <div className="footer-quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'navbar-link active' : 'navbar-link'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'navbar-link active' : 'navbar-link'
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'navbar-link active' : 'navbar-link'
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="footer-contact-info">
  <h3>Contact Information</h3>
  <p>
    <strong>Director:</strong>{' '}
    <a href="tel:+919928019295" className="footer-link">
      +91 99280 19295 - Mrs. Ritu Chauhan
    </a>{' '}/{' '}
    <a href="tel:+919782602097" className="footer-link">
      +91 97826 02097 - Vikram Singh Rathore
    </a>
  </p>
  <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:rdtcsingawal@gmail.com" className="footer-link">
                rdtcsingawal@gmail.com
              </a>{' '}
              /{' '}
              <a
                href="mailto:rajasthanroadsafety@gmail.com"
                className="footer-link"
              >
                rajasthanroadsafety@gmail.com
              </a>
            </p>
            <p>
              <strong>Address:</strong>{' '}
              <a
                href="https://www.google.com/maps?q=N.H.%2048%20Singawal%20Chauraha,%20Tahsil%20%E2%80%93%20Binay,%20District%20%E2%80%93%20Kekri,%20Singawal%20%E2%80%93%20Ajmer,%20Rajasthan,%20Pincode%20%E2%80%93%20305624"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                N.H. 48 Singawal Chauraha, Tahsil – Binay, District – Ajmer,
                Singawal – Rajasthan, Pincode – 305624
              </a>
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 RDTC Singawal Driving Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
