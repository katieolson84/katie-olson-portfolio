import React from 'react'
// import page components
import AboutSection from '../components/AboutSection';
import Work from '../components/Work';
import Faq from '../components/Faq';
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
        <Work />
        <Faq />
        <ScrollTop />
    </motion.div>
    )
};

export default AboutMe
