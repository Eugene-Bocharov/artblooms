import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Homepage } from './pages/Homepage/Homepage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { AppoinmentPage } from './pages/AppoinmentPage/AppoinmentPage';
import ProjectsPage from './pages/ProjectsPages/ProjectsPage';
import ExterPage from './pages/ServPages/ExterPage';
import HomAEPage from './pages/ServPages/HomAEPage';
import InterPage from './pages/ServPages/InterPage';
import RoofingPage from './pages/ServPages/RoofingPage';
import TestimonialsPage from './pages/ProjectsPages/TestimonialsPage';
import NewConstr from './pages/ServPages/NewConstr';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/studio" element={<div>Studio Page</div>} />
          <Route
            path="/art-classes-children"
            element={<div>Art Classes for Children</div>}
          />
          <Route
            path="/art-classes-adults"
            element={<div>Art Classes for Adults</div>}
          />
          <Route
            path="/art-classes-adolescents"
            element={<div>Art Classes for Adolescents</div>}
          />
          <Route path="/prices" element={<div>Prices Page</div>} />
          <Route path="/workshops" element={<div>Workshops Page</div>} />
          <Route path="/events" element={<div>Events Page</div>} />
          <Route
            path="/art-birthdays"
            element={<div>Art Birthdays Page</div>}
          />
          <Route
            path="/trial-classes"
            element={<div>Trial Classes Page</div>}
          />
          <Route path="/careers" element={<div>Careers Page</div>} />
          <Route path="/enroll-now" element={<div>Enroll Now Page</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
