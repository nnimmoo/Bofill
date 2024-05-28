import React from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
    return (
        <>
            <div className='preloader'>
                <div className="preloader-part">
                </div>
                <h1 className='spinner'></h1>
                <div className="preloader-part">
                </div>
            </div>

        </>

    );
};

export default Preloader;
