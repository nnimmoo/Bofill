import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h1>NOMADS ON A JOURNEY</h1>
            </div>
            <div className="footer-middle">
                <div className="footer-info">
                    <p>Barcelona, Spain</p>
                    <p>Avenida Industria 14</p>
                    <p>Tel: +34 93 499 99 00</p>
                </div>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/company/bofillarquitectura/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/bofillarquitectura/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/RicardoBofillTallerDeArquitectura" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <ul>
                    <li><Link to="/credits">Photo Credits</Link></li>
                </ul>
                <a>@nnimmoo</a>

            </div>
        </footer>
    );
};

export default Footer;