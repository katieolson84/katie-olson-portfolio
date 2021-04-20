import React from 'react'
import styled from 'styled-components';
// styles
import {Container} from '../styles';

const Faq = () => {
    return (
        <FaqContainer>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
            </div>
                <div className="answer">
                    <p>Lorem ipsum sit amet. </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque id maxime, quibusdam laudantium nam consectetur perferendis ea explicabo iure.</p>
                </div>
                <div className="faq-line"></div>
                <div className="question">
                <h4>Daily Schedule</h4>
            </div>
                <div className="answer">
                    <p>Lorem ipsum sit amet. </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque id maxime, quibusdam laudantium nam consectetur perferendis ea explicabo iure.</p>
                </div>
                <div className="faq-line"></div>
                <div className="question">
                <h4>Different Payment Methods</h4>
            </div>
                <div className="answer">
                    <p>Lorem ipsum sit amet. </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque id maxime, quibusdam laudantium nam consectetur perferendis ea explicabo iure.</p>
                </div>
                <div className="faq-line"></div>
                <div className="question">
                <h4>What products do you offer?</h4>
            </div>
                <div className="answer">
                    <p>Lorem ipsum sit amet. </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque id maxime, quibusdam laudantium nam consectetur perferendis ea explicabo iure.</p>
                </div> 
        </FaqContainer>
    )
}

const FaqContainer = styled(Container)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default Faq
