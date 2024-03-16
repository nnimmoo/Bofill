import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';
import pic from "../assets/images/Fabrica-04.jpg";
import fabrica from "../assets/images/Fabrica-01.jpg";
import Footer from '../components/Footer';

function Contact() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Madrid',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('en-GB', options);
      setCurrentTime(formatter.format(now));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // Hide when scrolling down
      } else {
        setShow(true); // Show when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Ricardo+Bofill+Taller+d'Arquitectura/@41.3810942,2.0682718,18.48z/data=!4m15!1m8!3m7!1s0x12a4997fa32e6d0f:0x45b843c35deb650!2sAv.+de+la+Ind%C3%BAstria,+14,+08960+Sant+Just+Desvern,+Barcelona,+Spain!3b1!8m2!3d41.3812446!4d2.0683773!16s%2Fg%2F11cpn31lmd!3m5!1s0x12a4997fbc395783:0xbdf4192c4570c16a!8m2!3d41.3812639!4d2.0683552!16s%2Fg%2F1tcx44tf?entry=ttu`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <>
      <div className={`contact-header-part  ${show ? 'show' : 'hide'}`}>
        <h1>Bofill</h1>
      </div>

      <div className="contact">
        <div className='contact-main'>
          <div>
            <h1>INTERESTED IN <br />
              RICARDO BOFILL <br /> TALLER DE ARQUITECTURA?</h1>
            <p>Got an idea we can help with? Want to join our team? Here’s how you can reach us.</p>
          </div>
          <div>
            <p>PRESS & MEDIA</p>
            <a href="mailto:press@bofill.com">press@bofill.com</a>
            <p>NEW BUSINESS </p>
            <a href="mailto:business@bofill.com">business@bofill.com</a>
          </div>
        </div>
        <img src={pic} className='contact-image-divider' />
        <div className='contact-career'>
          <h2>LOOKING FOR A NEW LIFE IN OUR COMPANY?</h2>
          <a href="mailto:careers@bofill.com">careers@bofill.com</a>
        </div>
        <div className="contact-social">
          <h2>VISIT US ON SOCIAL MEDIA!</h2>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div className='contact-office'>
          <div>
            <span>{currentTime}</span>
            <h1>HOLA</h1>

          </div>

          <img src={fabrica} />
          <div>
            <p>Barcelona, Spain</p>
            <p>Avenida Industria 14</p>
            <p>08960 Sant Just Desvern</p>
            <a href="tel:+34934999900">Tel: +34 93 499 99 00</a>
            <p style={{ fontWeight: "bold", cursor: "pointer", fontSize: "1em" }} onClick={openInGoogleMaps}>VIEW ON MAP</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
