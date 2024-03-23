import "../styles/Practice.css"
import React from 'react';
import imagePlaceholder from '../assets/images/test-02.jpg';
import chairs from "../assets/images/test-01.jpg"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ScrollingImage from "../components/ScrollingImage";

const PracticePart = ({ header, text, image }) => (
    <div className="practice-part">
        <div className="practice-content">
            <h2>{header}</h2>
            <p>{text}</p>
        </div>
        {image && <img className="practice-image" src={image} alt="Practice" />}
    </div>
);

const Practice = () => {
    const practiceText = "RBTA prides itself with a natural aptitude towards novelty and exploration. Since its establishment in 1963, the core strength of RBTA lies in the plurality of skills of its team. Talented professionals in architecture, urban design, master planning, and interiors, combine top-level knowledge and diversity of qualifications in a unique blend of competence and cultural sensitivity. Each member of our team is a nomad, following the traces of the lifelong journey of our founder and chairman, Ricardo Bofill Levi.";

    return (
        <>

            <div className="practice">

                <section className="practice-intro">
                    <div>
                        <h2>NOMADS ON A JOURNEY TO REDEFINE STYLE AND SPACE</h2>
                        <p>RBTA prides itself with a natural aptitude towards novelty and exploration. Since its establishment in 1963, the core strength of RBTA lies in the plurality of skills of its team. Talented professionals in architecture, urban design, master planning, and interiors, combine top-level knowledge and diversity of qualifications in a unique blend of competence and cultural sensitivity. Each member of our team is a nomad, following the traces of the lifelong journey of our founder and chairman, Ricardo Bofill Levi.</p>
                    </div>

                </section>
                {/* You can reuse PracticePart for the second and third parts */}
                <section className="practice-projects">
                    <h2>AN ADAPTIVE VOCABULARY AND THE SPIRIT OF THE PLACE</h2>
                    <div className="practice-projects-content">

                        <div className="practice-projects-count">
                            <h4>1000<span>+</span></h4>
                            <h5>Ground breaking Innovation</h5>
                        </div>
                        <div className="practice-projects-text">
                            <div className="practice-image">
                                <ScrollingImage src={imagePlaceholder} scrollSpeed={0.2} />
                            </div>


                            <p>Over one thousand projects in forty countries carry the distinctive traits of RBTA’s approach, rethinking cityscapes and social maps while preserving local cultures and identities. From the early monumental Modern Classicism to the shift towards Classical Modernism, we rethink lines and patterns through complementary innovations in technology and design. Experience and contact with local identities across four continents brought us to develop a diverse, composite architectural vocabulary that interprets and shapes the contemporary world.</p>
                            <Link to="/projects"><button>Our Projects</button></Link>
                        </div>
                        <div className="practice-projects-image">
                            <ScrollingImage src={chairs} scrollSpeed={0.2} />
                            {/* <img src={chairs} /> */}
                        </div>
                    </div>
                </section>
                <section className="practice-outro">
                    <h2>FOR A NEW HUMANISM OF SPACES</h2>
                    <div className="practice-outro-content" >
                        <div className="practice-outro-text" >
                            <p>More than fifty years ago, the visionary Ricardo Bofill Levi gathered architects, engineers, planners, and intellectuals, to join him in the Taller de Arquitectura. Today, we renew our commitment to emerging technical and societal challenges in every project, giving back centrality to the human experience, constructing our vocabulary for the future.

                                Working to pursue new highs in living standards, keeping in high regard social and environmental dimensions, architecture and design come at the service of the everyday. Applied, they encompass the human experience in its multitude of identities, functions, actions, and desires. We create and design spaces, while humans have the freedom – and the duty – to fill them. RBTA finds its place equally in the social and the individual, from vast master plans to housing units, shaping the landscape of a complex world.</p>
                        </div>
                        <div className="practice-outro-text">
                            <p>We adopt a holistic approach to planning and creation as architects of the world, on the pattern laid down by Ricardo Bofill more than half a century ago. In this capacity, his sons lead the activities of RBTA between architectural sophistication and an innovation-driven international outlook. Ricardo E. Bofill, Principal of RBTA, builds on a top-level education, one decade in the US, and works across four continents, to explore narrative architecture as an alternative to modern functional schemes. Pablo Bofill, our corporate CEO, facilitates the concrete production of creative ideas within and outside RBTA, drawing from experience in business and international cooperation.

                                Partner Jean-Pierre Carniaux, Senior Architect in the ranks of RBTA since 1976, participated in the making of our most renown and acclaimed projects in Europe, Asia, North America. The cadres of our architectural practice are then completed by Gabor Somssich as Chief Architect and Civil Engineer, Eduardo Wachs as Chief Design Architect, Giorgio Cui as Chief Architect and Master Planner, and Marta de Vilallonga as Chief Interior Designer.</p>
                        </div>
                    </div>
                </section>

                {/* Last part with the map */}
                <div className="practice-part">
                    <h2>GIVING SHAPE TO A CHANGING WORLD</h2>
                    {/* <MapChart /> */}
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Practice;

