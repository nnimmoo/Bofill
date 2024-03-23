import '../styles/About.css'; // Import the CSS file for styling
import portrait from "../assets/images/bofill-01.jpg"
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
    const aboutRightRef = useRef(null);

    const handleScroll = () => {
        const scrollPosition = aboutRightRef.current.scrollTop + aboutRightRef.current.clientHeight;
        const isAtBottom = scrollPosition >= aboutRightRef.current.scrollHeight;
        setIsScrolledToBottom(isAtBottom);
    };


    const scrollToTop = () => {
        aboutRightRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        aboutRightRef.current.scrollTo({ top: aboutRightRef.current.scrollHeight, behavior: 'smooth' });
    };

    useEffect(() => {
        const aboutRight = aboutRightRef.current;
        aboutRight.addEventListener('scroll', handleScroll);
        return () => aboutRight.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="about-container">
            <div className="about-left">
                <img src={portrait} alt="About" />
            </div>
            <div className="about-right">
                <div className="about-right-text" ref={aboutRightRef}>
                    <div className='about-right-content'>
                        <h4 className='about-right-title'>Life And Education</h4>
                        <p>Ricardo Bofill Levi was born on December 5, 1939, in Barcelona, Spain, into a family deeply ingrained in the arts. His father, Emilio Bofill, was a renowned architect, while his mother, Maria Levi, was a celebrated pianist. This artistic environment nurtured Ricardo's early interest in architecture. Bofill's formal architectural education began at the Escuela Técnica Superior de Arquitectura in Barcelona but was cut short due to his non-conformist views. He then pursued studies at the University of Geneva, focusing on architecture and urban planning.</p>
                    </div>
                    <div className='about-right-content'>
                        <h4 className='about-right-title'>Style</h4>
                        <p> Bofill's architectural style is a testament to his versatility and creativity, characterized by a fusion of various architectural traditions. His approach seamlessly blends elements from classical, modernist, and postmodernist styles, creating unique and visually striking structures. Bofill's designs often feature bold geometric forms, vibrant colors, and innovative use of materials, which set his buildings apart in the urban landscape. He was not afraid to experiment with shapes and forms, resulting in architecture that is both functional and sculptural. His work demonstrates a deep understanding of space and form, and his ability to combine aesthetics with practicality has made him a standout figure in the world of architecture.</p>
                    </div>
                    <div className='about-right-content'>
                        <h4 className='about-right-title'>Works</h4>
                        <p>Among Ricardo Bofill's most iconic works is "La Muralla Roja" (The Red Wall) in Calpe, Spain. Completed in 1973, this residential complex is renowned for its maze-like design and striking use of color, drawing inspiration from traditional North African architecture. Another notable project is "Walden 7," a futuristic residential building in Sant Just Desvern, near Barcelona. This complex is characterized by its modular design and communal living spaces, challenging conventional residential architecture norms.

                            Bofill's work also includes the transformation of industrial structures into vibrant living spaces, as seen in the redevelopment of an old gasometer in Vienna, Austria, into a mixed-use complex. In Japan, the Shiseido Building in Tokyo stands as a testament to his design prowess, showcasing a blend of modernity and elegance.

                            Throughout his career, Bofill continued to innovate, with projects like the Barcelona Airport Terminal 1, which combines functionality with aesthetic elegance, and the "Sails of Scampia" residential complex in Naples, Italy, aimed at revitalizing a troubled neighborhood. His diverse portfolio highlights his ability to adapt to different contexts and his commitment to creating spaces that enhance human experiences.</p>
                    </div>
                    <div className='about-right-content'>
                        <h4 className='about-right-title'>Inspiration to others</h4>
                        <p>Ricardo Bofill's work has inspired architects and designers worldwide with its visionary approach and commitment to enhancing human life quality. His projects often incorporate public spaces and communal areas, emphasizing social interaction and community building. Bofill's legacy continues to influence contemporary architecture, with his innovative designs and holistic approach to urban planning serving as a source of inspiration for future generations.</p>
                    </div>
                </div>
                <div className="scroll-indicator" onClick={isScrolledToBottom ? scrollToTop : scrollToBottom}>
                    <span>{isScrolledToBottom ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                </div>

            </div>

        </div>
    );
};

export default About;
