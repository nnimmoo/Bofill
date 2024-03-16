import React from 'react';
import '../styles/Footer.css'; // Adjust the path to your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h1>Your Four Word Sentence</h1>
            </div>
            <div className="footer-middle">
                <div className="footer-info">
                    <p>Barcelona, Spain</p>
                    <p>Avenida Industria 14</p>
                    <p>Tel: +34 93 499 99 00</p>
                </div>
                <div className="footer-icons">
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                </div>
            </div>
            <div className="footer-bottom">

                <a href="#">@nnimmoo</a>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie</a></li>
                    <li><a href="#">Photo Credits</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;