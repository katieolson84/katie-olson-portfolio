import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// images
import sauti from '../images/sauti1.png';
import boombox from '../images/BoomboxLibrary.jpg';
import cloud from '../images/clouddash.png';
import github from '../images/GitHubUserCard.jpg';
import nasa from '../images/Nasa.png';
import plants1 from '../images/plants1.png';
import Ron from '../images/RonSwanson.png';
// Animations
import { motion } from 'framer-motion';
import { sliderContainer, slider, pageAnimation, fade, photoAnim, lineAnim, } from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    const [element4, controls4] = useScroll();
    const [element5, controls5] = useScroll();
    const [element6, controls6] = useScroll();

    return (
        <WorkContainer
            style={{ background: "#fff" }}
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Project>
                <motion.h2 variants={fade}>Water My Plants</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/water-my-plants">
                    <Hide>
                        <motion.img variants={photoAnim} src={plants1} alt="water my plants app snapshot" />
                    </Hide>
                </Link>
            </Project>

            <Project ref={element} variants={fade} animate={controls} initial="hidden">
                <h2 className="project">Boombox Music Player</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/boombox">
                    <img src={boombox} alt="boombox app snapshot" />
                </Link>
            </Project>

            <Project ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2 className="project">Sauti African Marketplace</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to= "/work/sauti">
                    <img src={sauti} alt="sauit app snapshot" />
                </Link>
            </Project>

            <Project ref={element3} variants={fade} animate={controls3} initial="hidden">
                <h2 className="project">School in the Cloud</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to= "/work/school-in-the-cloud">
                    <img src={cloud} alt="sauit app snapshot" />
                </Link>
            </Project>

            <Project ref={element4} variants={fade} animate={controls4} initial="hidden">
                <h2 className="project">Ron Swanson Quotes</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to= "/work/ron-swanson">
                    <img src={Ron} alt="sauit app snapshot" />
                </Link>
            </Project>

            <Project ref={element5} variants={fade} animate={controls5} initial="hidden">
                <h2 className="project">GitHub User Cards</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to= "/work/github-user-cards">
                    <img src={github} alt="sauit app snapshot" />
                </Link>
            </Project>

            <Project ref={element6} variants={fade} animate={controls6} initial="hidden">
                <h2 className="project">Nasa Photo of the Day</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/nasa-pic-of-the-day">
                    <img src={nasa} alt="sauit app snapshot" />
                </Link>
            </Project>
            <ScrollTop />
        </WorkContainer>
    )
}

const WorkContainer = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
    h2 {
        padding: 1rem 0rem;
    }
`

const Project = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        object-position: left top;
    }
`
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;


export default MyWork
 