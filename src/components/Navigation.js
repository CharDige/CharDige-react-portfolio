import React from 'react';
import '../styles/Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className='navbar navbar-expand-lg nav-color'>
            <div className='container-fluid nav-center'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span>Menu</span>
                </button>
                <div className="collapse navbar-collapse nav-center" id="navbarNavAltMarkup">
                    <div className='navbar-nav'>
                        <a href='#Aboutme'
                            onClick={() => handlePageChange('Aboutme')}
                            className={currentPage === 'Aboutme' ? 'nav-link nav-link-style-active' : 'nav-link nav-link-style'}>
                            About Me
                        </a>
                        <a href='#Portfolio'
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link nav-link-style-active' : 'nav-link nav-link-style'}>
                            Portfolio
                        </a>
                        <a href='#Contact'
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link nav-link-style-active' : 'nav-link nav-link-style'}>
                            Contact
                        </a>
                        <a href='#Resume'
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link nav-link-style-active' : 'nav-link nav-link-style'}>
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navigation;