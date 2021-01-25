import React from 'react';
import AboutSection from '../components/About/About';
import FaqSection from '../components/FAQ/Faq';
import Nav from '../components/Nav/Nav';
import ServicesSection from '../components/Services/ServicesSection';
// import ANIMATIONS
import {motion} from 'framer-motion';
import { pageAnimation }from '../components/animation';


const AboutUs = () => {
    return (
        <motion.div 
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
        </motion.div>
    )
}

export default AboutUs;
