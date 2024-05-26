import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/Home/HeroSection';
import ExpertisesSection from './components/Home/ExpertisesSection';
import OfficesSection from './components/Home/OfficesSection';
import ProfileSection from './components/Home/ProfileSection';
import NewsSection from './components/Home/NewsSection';
import Footer from './components/Footer/Footer';
import ValuesSection from './components/About/ValuesSection';
import ContactDetails from './components/Contact/ContactDetails';
import Notaries from './components/Notaries/Notaries';

const Home = () => (
  <div>
    <HeroSection />
    <ExpertisesSection />
    <OfficesSection />
    <ProfileSection />
    <NewsSection />
  </div>
);


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-valeurs" element={<ValuesSection />} />
          <Route path="/les-notaires" element={<Notaries />} />
          <Route path="/contact" element={<ContactDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
