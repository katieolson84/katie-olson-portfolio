import React from 'react'
// import hi from '../images/hi.jpeg'
import katie from '../images/Katie_Olson.png';
// styles
import {About, Description, Image, Hide} from '../styles';
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>I'm Katie Olson,</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            a <span>Full Stack Web Developer</span>.
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    I'm also a UI/UX enthusiast, artist, Author, lover of goats, harbinger of vermaculture, & avid Dr. Mario player.
                </motion.p>
                <motion.button variants={fade}>Contact Me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={katie} alt="katie olson avatar" />
            </Image>
            <Wave />
        </About> 
    )
}



export default AboutSection;
