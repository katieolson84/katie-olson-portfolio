import React from 'react'
import hi from '../images/hi.jpeg'
// styles
import styled from 'styled-components';
import {Container} from '../styles';

const About = () => {
    return (
        <Container>
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
        </Container>
    )
}



export default About;
