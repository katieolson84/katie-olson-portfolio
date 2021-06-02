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
          // variants={scrollReveal}
          // animate={controls}
          // initial="hidden"
          // ref={element}
      >
        <Description>
          <h2>
              From My <span>Blog</span> 
          </h2>
          <Cards>
              <Card>
                  <div className="pic">
                  <img alt="computer" src={computer} />
                  </div>
                  <h3>From HR to Web Development</h3>
                  <p>It is never too lat to change careers.</p>
              </Card>
              <Card>
                  <div className="pic">
                  <img alt="figma board" src={figma} />
                  </div>
                  <h3>7 Ways to Improve UI/UX as a Developer</h3>
                  <p>How a Full-Stack Developer took on the role of Design Lead to improve the user experience on an existing application.</p>
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
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
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
  .pic {
    display: flex;
    align-items: center;
    width:300px;
    height:200px;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;



export default Work
