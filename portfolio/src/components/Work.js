import React from 'react'
// import icons
import clock from '../images/clock.svg';
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';
// import images
import heart from '../images/heart.jpeg';
// Styles
import styled from 'styled-components';
import { About, Description, Image } from '../styles';
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
              High <span>quality</span> projects
          </h2>
          <Cards>
              <Card>
                  <div className="icon">
                  <img alt="icon" src={clock} />
                  <h3>Quick Projects</h3>
                  </div>
                  <p>Small projects built in less than a day.</p>
              </Card>
              <Card>
                  <div className="icon">
                  <img alt="icon" src={teamwork} />
                  <h3>Team Projects</h3>
                  </div>
                  <p>Collaborated with 4-7 devlopers on projects completed in less than four days.</p>
              </Card>
              <Card>
                  <div className="icon">
                  <img alt="icon" src={diaphragm} />
                  <h3>Extensive Wire Frames</h3>
                  </div>
                  <p>All projects are mapped out with attention to detail before each build.</p>
              </Card>
              <Card>
                  <div className="icon">
                  <img alt="icon" src={money} />
                  <h3>Affordable</h3>
                  </div>
                  <p>Freelance within your budget.</p>
              </Card>
          </Cards>
        </Description>
        <Image>
            <img src={heart} alt="neon heart" />
        </Image>
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
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;



export default Work
