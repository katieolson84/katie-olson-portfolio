import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// images
import boombox from '../images/BoomboxLibrary.jpg';
import cloud from '../images/clouddash.png';
import github from '../images/GitHubUserCard.jpg';
import hrfa from '../images/hrfa.png';
import nasa from '../images/Nasa.png';
import plants1 from '../images/plants1.png';
import Ron from '../images/RonSwanson.png';
import sauti from '../images/sauti1.png';
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
    const [element7, controls7] = useScroll();

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
                <motion.h2 variants={fade}>Human Rights First Asylum</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <Hide className="image">
                        <motion.img variants={photoAnim} src={hrfa} alt="human right first asylum app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Full-Stack Developer & Design Lead</h3> 
                           <p>JavaScript | React | Less | Ant Design | Node.js | PostgreSQL | Figma</p>
                           <p>A software backed by data science to aggregate data on asylum cases in the USA. </p>
                           <p className="text-body">As the Design Lead, I was solely responsible for creating a visual wireframe, using Figma, to improve and polish the user interface and experience. I led my team of seven Web Developers to convert the existing code base from Material UI to Ant Design and Less. With my guidance, we created a cleaner, easy to navigate application.</p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/human-rights-first-asylum-fe-a'>FRONT-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/V2XbE5rpvqrNLOXs3m82k8/HRF-Asylum-Labs34-A?node-id=217%3A150'>FIGMA</a>
                            </div>
                        </div>
                    </Hide>
                </div>
            </Project>

            <Project ref={element} variants={fade} animate={controls} initial="hidden">
                <h2 className="projects">Water My Plants</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <Hide>
                        <motion.img variants={photoAnim} src={plants1} alt="water my plants app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Full-Stack Developer</h3> 
                           <p>JavaScript | React | Styled Components | Node.js | Knex | Jest | PostgreSQL | Figma | DB Designer</p>
                           <p>An application to manage watering schedules and care for house plants. </p>
                           <p className="text-body">I created a visual wireframe, using Figma, to map out the buiid from start to finish. I mainly worked on the backend and developed the schema for the database. Before we began coding, I mapped out each table with primary and forgein keys using DB Designer. I was soley responsible for creating seed data. When my tasks were completed, I was able to jump in and help the two front-end developers and coded a landing page for the app. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/backend-node-water-my-plants'>BACK-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://github.com/water-my-plants-tt27/frontend'>FRONT-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://frontend-water-my-plants.vercel.app/'>DEPLOYED SITE</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/va55FExpZocbW7A074bred/plant-store-Lambda?node-id=0%3A1'>FIGMA</a>
                           </div>
                        </div>
                    </Hide>
                </div>
            </Project>

            <Project ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2 className="project">Sauti African Marketplace</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <Hide>
                        <motion.img variants={photoAnim} src={sauti} alt="sauti app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Full-Stack Developer</h3> 
                           <p>JavaScript | React | Styled Components | Node.js | Knex | Jest | PostgreSQL | Figma | DB Designer</p>
                           <p>An application to manage watering schedules and care for house plants. </p>
                           <p className="text-body">I created a visual wireframe, using Figma, to map out the buiid from start to finish. I mainly worked on the backend and developed the schema for the database. Before we began coding, I mapped out each table with primary and forgein keys using DB Designer. I was soley responsible for creating seed data. When my tasks were completed, I was able to jump in and help the two front-end developers and coded a landing page for the app. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/backend-node-water-my-plants'>BACK-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://github.com/water-my-plants-tt27/frontend'>FRONT-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://frontend-water-my-plants.vercel.app/'>DEPLOYED SITE</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/va55FExpZocbW7A074bred/plant-store-Lambda?node-id=0%3A1'>FIGMA</a>
                           </div>
                        </div>
                    </Hide>
                </div>
            </Project>

            <Project ref={element3} variants={fade} animate={controls3} initial="hidden">
                <h2 className="project">Boombox Music Player</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <Hide>
                        <motion.img variants={photoAnim} src={boombox} alt="boombox app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Full-Stack Developer</h3> 
                           <p>JavaScript | React | SCSS </p>
                           <p>A music player with a set playlist of relaxing music to listen to while coding. </p>
                           <p className="text-body">I created this application during a course from 'Developed by Ed'. All styling is seperated into SCSS files to allow for quick changes. This was a fun project that allowed me to practice my skills in React. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/Boombox'>FRONT-END REPO</a>
                           </div>
                        </div>
                    </Hide>
                </div>
            </Project>

            <Project ref={element4} variants={fade} animate={controls4} initial="hidden">
                <h2 className="project">School in the Cloud</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <img src={cloud} alt="sauit app snapshot" />
                </div>
            </Project>

            <Project ref={element5} variants={fade} animate={controls5} initial="hidden">
                <h2 className="project">Ron Swanson Quotes</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <img src={Ron} alt="sauit app snapshot" />
                </div>
            </Project>

            <Project ref={element6} variants={fade} animate={controls6} initial="hidden">
                <h2 className="project">GitHub User Cards</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <img src={github} alt="sauit app snapshot" />
                </div>
            </Project>

            <Project ref={element7} variants={fade} animate={controls7} initial="hidden">
                <h2 className="project">Nasa Photo of the Day</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <img src={nasa} alt="sauit app snapshot" />
                </div>
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
        font-size: 3rem;
    }
`

const Project = styled(motion.div)`
    padding-bottom: 10rem;
    width: 90%;
    .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
        object-position: left top;
    }
`
const Hide = styled.div`
  overflow: hidden;
  position: relative;
  p{
      padding: .8rem;
  }
  .text-body{
      width: 80%;
      text-align: center;
  }
  .links{
    display: flex;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.5rem;
    padding-top: .8rem;
  }

  .image{
      display: block;
      width: 100%;
      
  }
  .image-overlay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.25s;
      &:hover{
        opacity: 1;
        & > * {
            transform: translateY(0);
        }
      }
      & > * {
        transform: translateY(20px);
        transition: transform 0.25s;
      }
  }
  
  .image-overlay-blur{
          backdrop-filter: blur(5px)
      }
  /* .image-overlay > * {
        transform: translateY(20px);
        transition: transform 0.25s;
  } */



  h3{
      font-size: 2rem;
  }
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
 