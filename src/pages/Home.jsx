import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import NewsletterModal from '../components/newsletter/NewsletterModal';
import { styles } from '../components/shared/Animations';

const Home = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleGetStarted = () => {
    setIsNewsletterOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <style>{styles}</style>
      <Navbar onGetStarted={handleGetStarted} />
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </div>
  );
};

export default Home;