import React, { useState } from 'react';
import NavbarRender from './Navbar';
import Footer from './Footer';
import Resume from '../pages/Resume';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';

export default function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderActivePage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <NavbarRender currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderActivePage()}

      <Footer />
      
    </div>
  );
};