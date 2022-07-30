import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function Project() {
    const [currentPage, setCurrentPage] = useState('Aboutme');

    // Setting the value of currentPage so the pages render when selected in the nav
    const renderPage = () => {
        if (currentPage === 'Aboutme') {
            return <Aboutme />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}