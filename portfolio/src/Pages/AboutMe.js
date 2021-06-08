import React from 'react'
// import page components
import AboutSection from '../components/AboutSection';
import Blog from '../components/Blog';
import Freelance from '../components/Freelance';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const AboutMe = () => {
    return (
    <motion.div 
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
    >
        <AboutSection />
        <Blog />
        <Freelance />
        <ScrollTop />
    </motion.div>
    )
};

export default AboutMe
