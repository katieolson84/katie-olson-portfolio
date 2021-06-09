import React from 'react';
import styled from 'styled-components';
// Images
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
                        <motion.img variants={photoAnim} src={hrfa} alt="Human right first asylum app snapshot" />
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
                        <motion.img variants={photoAnim} src={plants1} alt="Water my plants app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Full-Stack Developer</h3> 
                           <p>JavaScript | React | Styled Components | Node.js | Knex | Jest | PostgreSQL | Figma | DB Designer</p>
                           <p>An application to manage watering schedules and care for house plants. </p>
                           <p className="text-body">I created a visual wireframe, using Figma, to map out the buiid from start to finish. I mainly worked on the backend and developed the schema for the database. Before we began coding, I mapped out each table with primary and forgein keys using DB Designer. I was soley responsible for creating seed data. When my tasks were completed, I was able to jump in and help the two front-end developers and coded a landing page for the app. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/backend-node-water-my-plants'>BACK-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/frontend-water-my-plants'>FRONT-END REPO</a>
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
                        <motion.img variants={photoAnim} src={sauti} alt="Sauti app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Front-End Developer</h3> 
                           <p>JavaScript | React | Styled Components | Redux | Figma</p>
                           <p>An online marketplace where women in Africa can sell goods across borders. </p>
                           <p className="text-body">I worked strictly on the front-end. First, I created a visual wireframe, using Figma. I acted as the lead on the project and set up the repo in GitHub, installed all dependencies needed, and organized the repo for our team of six developers. I was solely responsible for setting up Redux on our build to allow access to state globally. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/African-Marketplace-TT27/front-end'>FRONT-END REPO</a>
                                {/* <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://sauti-african-marketplace-nine.vercel.app/'>DEPLOYED SITE</a> */}
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/GyyCawiA6ny47yANzDjf8S/Sauti-African-Market?node-id=0%3A1'>FIGMA</a>
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
                        <motion.img variants={photoAnim} src={boombox} alt="Boombox app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Full-Stack Developer</h3> 
                           <p>JavaScript | React | SCSS </p>
                           <p>A music player with a set playlist of relaxing music to listen to while coding. </p>
                           <p className="text-body">I created this application during a course from 'Developed by Ed'. All styling is seperated into SCSS files to allow for quick changes. This was a fun project that allowed me to practice my skills in React. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/Boombox'>FRONT-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://boombox-gules.vercel.app/'>DEPLOYED SITE</a>
                           </div>
                        </div>
                    </Hide>
                </div>
            </Project>

            <Project ref={element4} variants={fade} animate={controls4} initial="hidden">
                <h2 className="project">School in the Cloud</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <Hide>
                        <motion.img variants={photoAnim} src={cloud} alt="School in the cloud app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Front-End Developer</h3> 
                           <p>JavaScript | React | Styled Components </p>
                           <p>A platform to train volunteer teachers to be tutors and connects them with students. </p>
                           <p className="text-body">I worked as a front-end developer on this project with four other Web Developers. The site was built from scratch in four days. I created three dashboards, one for Admin, Volunteers, and Students using React and Styled Components. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/front-end-school-in-the-clouds'>FRONT-END REPO</a>
                                {/* <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://school-in-the-cloud.vercel.app/'>DEPLOYED SITE</a> */}
                           </div>
                        </div>
                    </Hide>
                </div>
            </Project>

            <Project ref={element5} variants={fade} animate={controls5} initial="hidden">
                <h2 className="project">Ron Swanson Quotes</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <Hide>
                        <motion.img variants={photoAnim} src={Ron} alt="Ron Swanson app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Front-End Developer</h3> 
                           <p>JavaScript | React | Redux | Styled Components </p>
                           <p>An app that generates a random Ron Swanson quote from Parks and Rec. </p>
                           <p className="text-body">This project was built using React and Redux and accesses a Ron Swanson quote API. Ron's head icon moves when hovered to add a bit of animation. This site was completed in less than one day. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/React-Redux-Quote-of-the-day'>FRONT-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://what-did-ron-swanson-say.vercel.app/'>DEPLOYED SITE</a>
                           </div>
                        </div>
                    </Hide>
                </div>
            </Project>

            <Project ref={element6} variants={fade} animate={controls6} initial="hidden">
                <h2 className="project">GitHub User Cards</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <Hide>
                        <motion.img variants={photoAnim} src={github} alt="GitHub user cards app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Front-End Developer</h3> 
                           <p>JavaScript | React | React-Bootstrap | CSS </p>
                           <p>An app that fetches user info from the GitHup API to display user info and their followers. </p>
                           <p className="text-body">I built this app in less than a day using class components in React. I used Axios to pull the user data from the GitHub API. I used React-Bootstrap for the Accordion and Card and it was styled using CSS. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/React-Github-User-Card'>FRONT-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://github-user-card-chi.vercel.app/'>DEPLOYED SITE</a>
                           </div>
                        </div>
                    </Hide>
                </div>
            </Project>

            <Project ref={element7} variants={fade} animate={controls7} initial="hidden">
                <h2 className="project">Nasa Photo of the Day</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <div>
                    <Hide>
                        <motion.img variants={photoAnim} src={nasa} alt="Nasa app snapshot" />
                        <div className="image-overlay image-overlay-blur">
                           <h3>Front-End Developer</h3> 
                           <p>JavaScript | React | Styled Components </p>
                           <p>An app that fetches user info from the GitHup API to display user info and their followers. </p>
                           <p className="text-body">This project was built using React and was completed in less than one day. I pulled the Nasa photo of the day using axios and the NASA API with a useEffect hook. I then styled the app with Styled Components to mimic the 70's Nasa design and a polaroid picture. </p>
                           <div className="links">
                                <a target="_blank" rel="noreferrer" href='https://github.com/katieolson84/nasa-photo-of-the-day'>FRONT-END REPO</a>
                                <p> | </p>
                                <a target="_blank" rel="noreferrer" href='https://nasa-photo-of-the-day-beta-seven.vercel.app/'>DEPLOYED SITE</a>
                           </div>
                        </div>
                    </Hide>
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
    h2 {
        padding: 1rem 0rem;
        font-size: 3rem;
    }

    @media (max-width: 1300px) {
        padding: 1rem;
        h2{
            font-size: 2rem;
        }
    }
`;

const Project = styled(motion.div)`
    padding-bottom: 10rem;
    width: 100%;
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

    @media (max-width: 1300px) {
        width: 100%;
        padding: 2rem 2rem;
        img{
            height: 50vh;
        }
        h3{
            text-align: center;
        }
    }
`;

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
        justify-content: center;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        color: #ffffff;
        font-size: 1.5rem;
        padding-top: .8rem;
    }
    image{
        display: block;
        width: 100%;
        border: none;
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

        @media (max-width: 1300px) {
            a{
                font-size: .8rem;
                padding-top: .6rem;
            }
            p{
                font-size: .9rem;
                text-align: center;
                padding: .5rem;
            }
        }
    }
    .image-overlay-blur{
            backdrop-filter: blur(5px)
        }
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
    background: #0c0c0c;
    z-index: 2;
    `;

    const Frame2 = styled(Frame1)`
    background: #6b6868;
    `;

    const Frame3 = styled(Frame1)`
    background: #bcbaba;
    `;

    const Frame4 = styled(Frame1)`
    background: #ffffff;
    `;

export default MyWork
 