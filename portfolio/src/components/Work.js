import React from 'react'
// import images
import computer from '../images/computer.jpeg';
import figma from '../images/figma.png';
// Styles
import styled from 'styled-components';
import { About, Description } from '../styles';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const Work = () => {
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
                  <div className="card">
                  <img alt="computer" src={computer} />
                  </div>
                  <h3>From HR to Web Development</h3>
                  <p className="card-details">It is never too late to change careers.</p>
              </Card>
              <Card>
                  <div className="card">
                  <img alt="figma board" src={figma} />
                  </div>
                  <h3>7 Ways to Improve UI/UX as a Developer</h3>
                  <p className="card-details">How a Full-Stack Developer took on the role of Design Lead to improve the user experience on an existing application.</p>
              </Card>
          </Cards>
        </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  padding: 2rem;
  box-shadow: 0px 30px 60px -40px rgba(0, 0, 0, 0.5);

  .card {
    display: flex;
    align-items: center;
    width:100%;
    overflow: hidden;
  }
  h3 {
    font-weight: lighter;
    font-size: 1.4rem;
    background: white;
    color: black;
    padding: 1rem;
  }
  img {
    width: 350px;
    height:200px;
  }
  p{
    padding: 1rem;
  }
`;



export default Work
