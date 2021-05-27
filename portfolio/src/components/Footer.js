import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from "../animation";
import { Description } from '../styles';
// Icons
import email from '../images/iconmonstr-email.png'
import linkedin from '../images/iconmonstr-linkedin.png'
import insta from '../images/iconmonstr-instagram.png'
import twitter from '../images/iconmonstr-twitter.png'
import github from '../images/iconmonstr-github.png'

const Footer = () => {
    
    return (
        <FooterContainer>
            <Description>
                <h2>
                    Let's Create Together
                </h2>
                <motion.button variants={fade}>Contact Me</motion.button>
            </Description>
            <ul>
                <li>
                    <a href="mailto:katieolson84@gmail.com">
                        <img src={email} alt="email icon" />
                        KATIEOLSON84@GMAIL.COM
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/katieolson84/">
                        <img src={linkedin} alt="linkedin icon" />
                        ON LINKEDIN
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/katie_one_hundred/">
                        <img src={insta} alt="instagram icon" />
                        ON INSTAGRAM
                    </a>
                </li>

                <li> 
                    <a href="https://twitter.com/katieolson_100">
                        <img src={twitter} alt="twitter icon" />
                        ON TWITTER
                    </a>
                </li>

                <li>
                    <a href="https://github.com/katieolson84">
                        <img src={github} alt="github icon" />
                        CHECK OUT MY CODE
                    </a>
                </li>
            </ul>
        </FooterContainer>
    )
}

const FooterContainer = styled.nav`
    min-height: 40vh;
    display: flex;
    justify-content: space-between;
    padding: 3rem 10rem;
    background: #282828;
    h2{
        color: #ffffff;
        padding-bottom: 2rem;
    }
    a{
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        
    }
    ul{
        display: flex;
        list-style: none;
        flex-direction: column;
        padding-right: 6rem;
    }
    
    li{
        padding-left: 10rem;
        position: relative;
        
    }
    img{
        width: 40px;
        margin: .6rem;
    }
    @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 1rem;
    h2, button{
        margin-left: 2rem;
    }

    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
`;

export default Footer
