import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import KeyActivitiesPage from './pages/KeyActivitiesPage';
import DrivingTrackPage from './pages/DrivingTrackPage';
import AppointmentForm from './components/AppointmentForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DetailsPage from './pages/DetailsPage';
import LMVCoursePage from './pages/LMVCoursePage';
import HMVCoursePage from './pages/HMVCoursePage';
import MotorcycleCoursePage from './pages/MotorcycleCoursePage';
import Administration from "./components/Administration";
import LearnMorePage from "./pages/LearnMorePage"
import GovernmentApproved from './pages/GovernmentApproved';
import Gallery from './components/Gallery';


const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />  {/* Navigation bar */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/key-activities" element={<KeyActivitiesPage />} />
            <Route path="/drivingtrackpage" element={<DrivingTrackPage />} />
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/hmv-course" element={<HMVCoursePage />} />
            <Route path="/lmv-course" element={<LMVCoursePage />} />
            <Route path="/motorcycle-course" element={<MotorcycleCoursePage />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/learnmorepage" element={<LearnMorePage />} />
            <Route path="/GovernmentApproved" element={<GovernmentApproved />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
