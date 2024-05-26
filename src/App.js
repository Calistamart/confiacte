import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/Home/HeroSection';
import ExpertisesSection from './components/Home/ExpertisesSection';
import OfficesSection from './components/Home/OfficesSection';
import ProfileSection from './components/Home/ProfileSection';
import NewsSection from './components/Home/NewsSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ExpertisesSection />
      <OfficesSection />
      <ProfileSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default App;
