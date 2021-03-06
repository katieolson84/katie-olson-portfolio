import React from 'react'
import styled from 'styled-components';
// Icons
import email from '../images/iconmonstr-email.png'
import github from '../images/iconmonstr-github.png'
import insta from '../images/iconmonstr-instagram.png'
import linkedin from '../images/iconmonstr-linkedin.png'
import twitter from '../images/iconmonstr-twitter.png'

const Footer = () => {
    
    return (
        <FooterContainer>
            <div className="footer">
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
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/katieolson84/">
                            <img src={linkedin} alt="linkedin icon" />
                            <p>LINKEDIN</p>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/katie_one_hundred/">
                            <img src={insta} alt="instagram icon" />
                            <p>INSTAGRAM</p>
                        </a>
                    </li>

                    <li> 
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/katieolson_100">
                            <img src={twitter} alt="twitter icon" />
                            <p>TWITTER</p>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" rel="noreferrer" href="https://github.com/katieolson84">
                            <img src={github} alt="github icon" />
                            <p>MY REPOS</p>
                        </a>
                    </li>
                </ul>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.nav`
    min-height: 35vh;
    display: flex;
    flex-direction: row;
    padding-left: 8rem;
    background: #282828;
    align-items: center;
    justify-content: center;
    .footer{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
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
        padding-right: 10rem;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    img{
        width: 20px;
        margin: .7rem;
    }
    p{
        padding: 0 1.5rem;
        &:hover{
            color: #3BD997;
        }
    }
    
    @media (max-width: 1300px) {
    padding: 1rem 1rem;
    .footer{
        flex-direction: column;
    }
    h2{
        text-align: center;
        padding-top: 1rem;
        font-size: 2.5rem;
    }
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    p{
        font-size: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
    }
`;

export default Footer
