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

const MyWork = () => {
    return (
        <WorkContainer>
            <Project>
                <h2 className="project">Water My Plants</h2>
                <div className="line"></div>
                <Link>
                    <img src={plants1} alt="water my plants app snapshot" />
                </Link>
            </Project>

            <Project>
                <h2 className="project">Boombox Music Player</h2>
                <div className="line"></div>
                <Link>
                    <img src={boombox} alt="boombox app snapshot" />
                </Link>
            </Project>

            <Project>
                <h2 className="project">Sauti African Marketplace</h2>
                <div className="line"></div>
                <Link>
                    <img src={sauti} alt="sauit app snapshot" />
                </Link>
            </Project>

            <Project>
                <h2 className="project">School in the Cloud</h2>
                <div className="line"></div>
                <Link>
                    <img src={cloud} alt="sauit app snapshot" />
                </Link>
            </Project>

            <Project>
                <h2 className="project">Ron Swanson Quotes</h2>
                <div className="line"></div>
                <Link>
                    <img src={Ron} alt="sauit app snapshot" />
                </Link>
            </Project>

            <Project>
                <h2 className="project">GitHub User Cards</h2>
                <div className="line"></div>
                <Link>
                    <img src={github} alt="sauit app snapshot" />
                </Link>
            </Project>

            <Project>
                <h2 className="project">Nasa Photo of the Day</h2>
                <div className="line"></div>
                <Link>
                    <img src={nasa} alt="sauit app snapshot" />
                </Link>
            </Project>
        </WorkContainer>
    )
}

const WorkContainer = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    
    h2{
        padding: 1rem 0rem;
    }
`

const Project = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height:70vh;
        object-fit: cover;
        object-position: left top;
    }
`


export default MyWork
 