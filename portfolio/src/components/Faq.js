import React from 'react'
import styled from 'styled-components';
// styles
import {Container} from '../styles';

const Faq = () => {
    return (
        <FaqContainer>
            <h2>Any <span>Questions</span></h2>
            <div className="question">
                <h4>Do you do freelance projects?</h4>
            </div>
                <div className="answer">
                    <p>Yes. </p>
                    <p>I have teamed up with an experienced UX/UI designer to provide a complete package of services. Together we map out the design and layout of your build and communicate with you every step of the way. Contact me for more details.</p>
                </div>
                <div className="faq-line"></div>
                <div className="question">
                <h4>How long does each build take?</h4>
            </div>
                <div className="answer">
                    <p>That depends. </p>
                    <p>Every build is different. Each build is mapped out to determine the needs of the project and timeframes vary. The number of features and the complexity of the app are taken into consideration when determining the time needed to develop an app. We can discuss options if your project is on a deadline.</p>
                </div>
                <div className="faq-line"></div>
                <div className="question">
                <h4>What payment methods do you except.</h4>
            </div>
                <div className="answer">
                    <p>PayPal, Cash App, or Venmo</p>
                    <p>Only eletronic payment methods are accepted at this time and a deposit is due before any work begins. Trades and equity can be discussed.</p>
                </div>
                <div className="faq-line"></div>
                
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
