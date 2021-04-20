import React from 'react'
import hi from '../images/hi.jpeg'
// styles
import styled from 'styled-components';


const About = () => {
    return (
        <AboutContainer>
            <div className="description">
                <div className="title">
                    <div classname="hide">
                        <h2>I'm Katie Olson,</h2>
                    </div>
                    <div classname="hide">
                        <h2>a <span>Full Stack Web Developer</span>.</h2>
                    </div>
                </div>
                <p>I'm also a UI/UX enthusiast, artist, Author, lover of goats, harbinger of vermaculture, & avid Dr. Mario player.</p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={hi} alt="hi neon sign"/>
            </div>
        </AboutContainer>
    )
}

//Styled components
const AboutContainer = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;

    .description{
        flex: 1;
        padding-right: 5rem;
        font-weight: lighter;
    }
    overflow: hidden;
    .image{
        flex: 1;
        img{
            width: 100%;
            height: 80vh;
            object-fit: cover;
        }
    }
    .hide{
        overflow: hidden;
    }
`

export default About;
