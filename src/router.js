import React from 'react';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./Layout"; 
import Menu from './components/Menu';
import Projects from './pages/Projects';

export const router = [
    {
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
        path: '/',
    },
    {
        element: (
            <Layout>
                <Contact />
            </Layout>
        ),
        path: '/contact',
    },
    {
        element: (
            <Layout>
                <Projects />
            </Layout>
        ),
        path: '/projects',
    },
    {
        element: (
            <Layout>
                <Menu />
            </Layout>
        ),
        path: '/menu',
    },
    // Other routes...
];
