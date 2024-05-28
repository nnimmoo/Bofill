import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../styles/Button.css"
const Button = ({ text, link, color="" }) => {
    return (

        <>
            <Link to={`/${link}`}>
                <button class={`cta ${color}`}>
                    <span>{text} <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                   
                </button>
            </Link>

        </>
    );
};

export default Button;