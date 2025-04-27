import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Homepage } from './pages/Homepage/Homepage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { StudioPage } from './pages/StudioPage/StudioPage';
import { ArtClassesChildrenPage } from './pages/ArtClassesChildrenPage/ArtClassesChildrenPage';
import { ArtClassesAdultsPage } from './pages/ArtClassesAdultsPage/ArtClassesAdultsPage';
import { ArtClassesAdolescentsPage } from './pages/ArtClassesAdolescentsPage/ArtClassesAdolescentsPage';
import { PricesPage } from './pages/PricesPage/PricesPage';
import { WorkshopsPage } from './pages/WorkshopsPage/WorkshopsPage';
import { EventsPage } from './pages/EventsPage/EventsPage';
import { ArtBirthdaysPage } from './pages/ArtBirthdaysPage/ArtBirthdaysPage';
import { TrialClassesPage } from './pages/TrialClassesPage/TrialClassesPage';
import { CareersPage } from './pages/CareersPage/CareersPage';
import { EnrollNowPage } from './pages/EnrollNowPage/EnrollNowPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route
            path="/art-classes-children"
            element={<ArtClassesChildrenPage />}
          />
          <Route
            path="/art-classes-adults"
            element={<ArtClassesAdultsPage />}
          />
          <Route
            path="/art-classes-adolescents"
            element={<ArtClassesAdolescentsPage />}
          />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/art-birthdays" element={<ArtBirthdaysPage />} />
          <Route path="/trial-classes" element={<TrialClassesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/enroll-now" element={<EnrollNowPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
