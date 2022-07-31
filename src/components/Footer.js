import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <a href="https://github.com/CharDige" target="_blank" rel="noreferrer" className='icon-link-style'>
                <i className="bi bi-github icon-style"></i>
            </a>
            <a href="https://www.linkedin.com/in/charlotte-dige/" target="_blank" rel="noreferrer" className='icon-link-style'>
                <i className="bi bi-linkedin icon-style"></i>
            </a>
            <a href="https://www.instagram.com/charlotte_dige/" target="_blank" rel="noreferrer" className='icon-link-style'>
                <i className="bi bi-instagram icon-style"></i>
            </a>
            <a href="https://stackoverflow.com/users/18213516/charlotte-d" target="_blank" rel="noreferrer" className='icon-link-style'>
                <i className="bi bi-stack-overflow icon-style"></i>
            </a>
            <p>&copy; Charlotte Dige 2022</p>
        </footer>
    )
}

export default Footer;