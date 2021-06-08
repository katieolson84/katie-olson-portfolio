import React from 'react';
// import images
import computer from '../images/computer.jpeg';
import figma from '../images/figma.png';
// Styles
import styled from 'styled-components';
import { About, Description } from '../styles';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const Blog = () => {
    const [element, controls] = useScroll();

    return (
      <Services
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
      >
        <Description>
          <h2>
              Blog <span>Posts</span> 
          </h2>
          <Cards>
              <Card>
                <a href='https://katieolson84.medium.com/from-hr-to-web-development-7faab1e22f60'>
                  <div className="pic">
                    <img alt="computer" src={computer} />
                  </div>
                  <h3>From HR to Web Development</h3>
                  <p className="card-details">It is never too late to change careers.</p>
                </a>
              </Card>

              <Card>
                <a href='https://katieolson84.medium.com/7-ways-to-improve-ui-ux-as-a-developer-90c4a0b197a5'>
                  <div className="pic">
                    <img alt="figma board" src={figma} />
                  </div>
                  <h3>7 Ways to Improve UI/UX as a Developer</h3>
                  <p className="card-details">How a Full-Stack Developer took on the role of Design Lead to improve the user experience on an existing application.</p>
                </a>
              </Card>
          </Cards>
        </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 4rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  @media (max-width: 1300px) {
    display: column;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  padding: 1rem;
  box-shadow: 0px 30px 60px -40px rgba(0, 0, 0, 0.5);

  .pic {
    display: flex;
    align-items: center;
    width:100%;
    overflow: hidden;
  }

  h3 {
    font-weight: lighter;
    font-size: 1.8rem;
    background: #ffffff;
    color: #1C1C1C;
    padding: 1rem;
  }

  img {
    width: 45rem;
    height:25rem;
  }

  p{
    padding: 1rem;
  }

  a{
    cursor: pointer;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    justify-content: center;
    align-content: center;
    padding-bottom: 3rem;
    img {
    width: 30rem;
    height:15rem;
  }
  }
`;



export default Blog;
