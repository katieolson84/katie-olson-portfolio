import React from 'react'
import styled from 'styled-components';
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
            <h2>
                Let's Create Together
            </h2>
            <ul>
                <li>
                    <a href="mailto:katieolson84@gmail.com">
                        <img src={email} alt="email icon" />
                        <p>KATIEOLSON84@GMAIL.COM</p>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/katieolson84/">
                        <img src={linkedin} alt="linkedin icon" />
                        <p>LINKEDIN</p>
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/katie_one_hundred/">
                        <img src={insta} alt="instagram icon" />
                        <p>INSTAGRAM</p>
                    </a>
                </li>

                <li> 
                    <a href="https://twitter.com/katieolson_100">
                        <img src={twitter} alt="twitter icon" />
                        <p>TWITTER</p>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/katieolson84">
                        <img src={github} alt="github icon" />
                        <p>MY REPOS</p>
                    </a>
                </li>
            </ul>
        </FooterContainer>
    )
}

const FooterContainer = styled.nav`
    min-height: 30vh;
    display: flex;
    flex-direction: row;
    padding-left: 8rem;
    background: #282828;
    align-items: center;
    justify-content: space-between;

    h2{
        color: #ffffff;
        margin-bottom: 0;
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
        width: 20px;
        margin: .6rem;
    }

    p{
        padding: 0 1rem;
    }

    @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 1rem;

    h2{
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
