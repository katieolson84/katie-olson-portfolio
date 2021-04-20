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
                        <h2>We work to make</h2>
                    </div>
                    <div classname="hide">
                        <h2>your <span>dreams</span> come
                        </h2>
                    </div>
                    <div classname="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact me if you are interested in custom development work.</p>
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

    img{
        width:200px;
        height:400px;
    }
`

export default About;
