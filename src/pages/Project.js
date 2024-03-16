import "../styles/Project.css";
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="project">
            <div ref={ref}>
                <img className="project-image" src={id} alt={`Image #${index}`} />
            </div>
            <motion.h2 style={{ y }}>{`#00${index + 1}`}</motion.h2>
        </section>
    );
}


export default function Project() {
    const { id } = useParams();
    const AUTH = process.env.REACT_APP_AUTH;
    const [data, setData] = useState({ imageLinks: [] });
    const [showDetails, setShowDetails] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${AUTH}`,
        };
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://crudapi.co.uk/api/v1/Bofill/${id}`, { headers });
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            {data.imageLinks.map((image, index) => (
                <Image key={index} id={image} index={index} />
            ))}

            <motion.div className="progress" style={{ scaleX }} />

            <div className="project-button" onClick={handleToggleDetails}>
                <h1>{data.name}</h1>
            </div>

            {showDetails && (
                <div className={`project-details ${showDetails ? 'show' : ''}`}>
                     <p>Year: {data.dateOfCreation}</p>
                     <p>  Location: {data.location}</p>
                   Information: <p> {data.shortBio}</p>
                </div>

            )}
        </>
    );
}
