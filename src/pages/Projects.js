import logo from "../assets/images/Muralla.jpg"
import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const Projects = () => {
    const AUTH = process.env.REACT_APP_AUTH;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${AUTH}`,
        };
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://crudapi.co.uk/api/v1/Bofill', { headers });
                setData(response.data.items);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();

    }, []);

    if (isLoading) {
        return <span className="loader"></span>
    }

    return (
        <div>
            <div className="sticky-nav">
                <div className="header-part">
                    <h1>Bofill</h1>
                </div>
                <div className="top-part">
                    <a href="#">Residential</a>
                    <a href="#">Hotels</a>
                    <a href="#">Urban</a>
                    <a href="#">Houses</a>
                </div>
                <div className="bottom-part">
                    <a href="#">60s</a>
                    <a href="#">70s</a>
                    <a href="#">80s</a>
                    <a href="#">90s</a>
                    <a href="#">00s</a>
                    <a href="#">10s</a>
                </div>
            </div>
            <div className="list-container">
                {data.map((project) => (
                    console.log(project),

                    <div className="list-item"><Link to={`/projects/${project._uuid}`}>
                        <img src={project.imageLinks[0]} alt="Image Name" />
                        <div className="overlay">{project.name}</div>
                    </Link>
                    </div>

                ))}

            </div>
        </div>
    );
};

export default Projects;
