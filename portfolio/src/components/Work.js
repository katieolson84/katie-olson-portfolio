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
import {Container} from '../styles';

const Work = () => {
    return (
        <WorkContainer>
            <div className="description">
                <h2>High <span>quality</span>services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock icon"/>
                            <h3>Quick Projects</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork icon"/>
                            <h3>Team Projects</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm icon"/>
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={heart} alt=""/>
            </div>
        </WorkContainer>
    )
}

const WorkContainer = styled(Container)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    .cards{
        display: flex;
        flex-wrap: wrap;
    }
    .card{
       flex-basis: 20rem;
       .icon{
           display: flex;
           align-items: center;
           h3{
               margin-left: 1rem;
               background: white;
               color: black;
               padding: 1rem;
           }
       } 

    }
`


export default Work
