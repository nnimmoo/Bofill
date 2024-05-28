import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import Projects from './pages/Projects';
import Submission from './pages/Submission';
import Project from './pages/Project';
import Practice from './pages/Practice';
import About from './pages/About';
import { Credits } from './pages/Credits';
import { Test } from './pages/test';
import  { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import 'animate.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/menu', element: <Menu /> },
            { path: '/projects', element: <Projects /> },
            { path: '/projects/:id', element: <Project /> },
            { path: '/about', element: <About /> },
            { path: '/practice', element: <Practice /> },
            { path: '/submission', element: <Submission /> },
            { path: '/credits', element: <Credits /> },
            { path: '/test', element: <Test /> },
            // Other routes...
        ],
    },
]);

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3500);
    }, []);

    return (
        <div className='app'>
            {isLoading ? <Preloader /> : <RouterProvider router={router} />}
        </div>
    );
}

export default App;
