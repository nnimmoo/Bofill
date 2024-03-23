import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
const Projects = () => {
    const AUTH = process.env.REACT_APP_AUTH;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedDecades, setSelectedDecades] = useState([]);

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const toggleDecade = (decade) => {
        if (selectedDecades.includes(decade)) {
            setSelectedDecades(selectedDecades.filter(d => d !== decade));
        } else {
            setSelectedDecades([...selectedDecades, decade]);
        }
    };


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
        <>
            <div>
                <div className="sticky-nav">
                    <div className="top-part">
                        {['Hotel', 'Urban', 'Housing', 'Office'].map((tag) => (
                            <a
                                className={selectedTags.includes(tag) ? 'selected-tag' : ''}
                                onClick={() => toggleTag(tag)}
                            >
                                {tag}
                            </a>
                        ))}
                    </div>

                    <div className="bottom-part">
                        {['60s', '70s', '80s', '90s', '00s', '10s'].map((decade) => (
                            <a
                                className={selectedDecades.includes(decade) ? 'selected-tag' : ''}
                                onClick={() => toggleDecade(decade)}
                            >
                                {decade}
                            </a>
                        ))}
                    </div>

                </div>
                <div className="list-container">
                    {data.filter(project =>
                        (selectedTags.length === 0 || selectedTags.some(tag => Array.isArray(project.tags) && project.tags.includes(tag))) &&
                        (selectedDecades.length === 0 || selectedDecades.some(decade => {
                            const year = parseInt(project.dateOfCreation.toString().slice(-2));
                            return (decade === '60s' && year >= 60 && year < 70) ||
                                (decade === '70s' && year >= 70 && year < 80) ||
                                (decade === '80s' && year >= 80 && year < 90) ||
                                (decade === '90s' && year >= 90 && year < 100) ||
                                (decade === '00s' && year >= 0 && year < 10) ||
                                (decade === '10s' && year >= 10 && year < 20);
                        }))
                    ).map((project) => (
                        <div className="list-item">
                            <Link to={`/projects/${project._uuid}`}>
                                <img src={project.imageLinks[0]} alt="Image Name" />
                                <div className="overlay">{project.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>




            </div>
            <Footer />
        </>
    );
};

export default Projects;
