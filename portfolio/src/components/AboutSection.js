import React from 'react'
import { useHistory } from 'react-router-dom';
// image import
import katie from '../images/Katie_Olson.png';
// styles
import {About, Description, Image, Hide} from '../styles';
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
    const history = useHistory();

    const redirect = () => {
        history.push('/contact')
    }

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
                        <motion.h2 variants={titleAnim}></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    I currently call Utah my home and I'm in love with my mountain views. My passion is Front-end and I love using my creative background to bring projects to life.
                </motion.p>
                <motion.p variants={fade}>
                    I'm a UI/UX enthusiast, artist, Author, lover of goats, harbinger of vermaculture, & avid Dr. Mario player.
                </motion.p>
                <motion.p variants={fade}>
                    Contact me to learn more. 
                </motion.p>
                <motion.button variants={fade} onClick={redirect}>CONTACT ME</motion.button>
            </Description>

            <Image>
                <motion.img variants={photoAnim} src={katie} alt="katie olson avatar" />
            </Image>
            
            <Wave />
        </About> 
    )
}

export default AboutSection;
