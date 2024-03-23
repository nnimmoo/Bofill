import "../App.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import intro from "../assets/images/fabrica-90.webp"
import chairs from "../assets/images/13ricardo.jpg"
import Button from "../components/Button";
import Footer from '../components/Footer';
import ScrollingImage from "../components/ScrollingImage";
import { Link } from "react-router-dom";

function Home() {
    const AUTH = process.env.REACT_APP_AUTH;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [randomItems, setRandomItems] = useState([]);

    const getRandomItem = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };


    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${AUTH}`,
        };
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://crudapi.co.uk/api/v1/Bofill', { headers });
                const items = response.data.items;
                setData(items);
                setIsLoading(false);

                // Set 3 random items
                setRandomItems([
                    getRandomItem(items),
                    getRandomItem(items),
                    getRandomItem(items)
                ]);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='home'>

            <section className='section -intro'>
                <h1>STORY OF A NOMAD</h1>
                <p>Barcelona, Spain</p>
            </section>
            <div className='-intro-image'>
                <ScrollingImage src={intro} scrollSpeed={0.2} />
            </div>

            <section className='section -about'>


                <h3 className="-about-header">ABOUT</h3>
                <div className="-about-content">
                    <p>
                        Ricardo Bofill was a renowned Spanish architect known for his innovative and diverse architectural designs that spanned over half a century. He founded Ricardo Bofill Taller de Arquitectura in 1963, which became famous for projects like Walden 7 and La Muralla Roja, characterized by their bold colors and geometric forms.
                    </p>
                    <Button text="About Bofill" link="about" color="light" />

                    <hr />
                    <p>
                        He founded Ricardo Bofill Taller de Arquitectura in 1963, which became famous for projects like Walden 7 and La Muralla Roja, characterized by their bold colors and geometric forms.
                    </p>
                    <Button text="About RBTA" link="practice" color="light" />


                </div>




            </section>
            <section className="section -projects">
                <div className="-projects-header">
                    <h3>FEATURED PROJECTS</h3>
                    <p>Spaces Redefined</p>
                </div>
                <div className="-projects-featured">
                    {randomItems.map((item, index) => (
                        <div key={index} className="list-item">
                            <Link to={`/projects/${item._uuid}`}>
                                <img src={item.imageLinks[0]} alt="Image Name" />
                                <div className="overlay">{item.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Button text="See Projects" link="projects" color="dark" />
            </section>

            <hr className="-divider" />

            <section className="section -contact">
                <div className="-contact-image">
                    <ScrollingImage src={chairs} scrollSpeed={0.2} />
                </div>
                <div className="-contact-content">
                    <h3>
                        Inspiring Possibilities, <br />
                        Defining Spaces.
                    </h3>
                    <Button
                        text="Get in Touch"
                        link="contact"
                        color="dark" />
                    <hr />
                    <p>Join us in the pursuit of architectural excellence, where every project is a legacy in the making.</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
