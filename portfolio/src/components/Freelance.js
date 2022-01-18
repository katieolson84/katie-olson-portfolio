import React from 'react'
// Styles & animation
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const Freelance = () => {
    const [element, controls] = useScroll();
    return (
        <FaqContainer
            variants={scrollReveal}
            ref={element}
            animate={controls}
            initial="hidden"
        >
            <div className="freelance-title">
                <h2>Available for </h2>
                <span>Freelance</span>
            </div>
            <AnimateSharedLayout>
                <Toggle title="Services Offered">
                    <div className="answer">
                        <p>I have teamed up with an experienced UX/UI designer to provide a complete package of services. Together we create logos, dynamite websites, complete branding packages, product and packaging design, and marketing material. We map out the design and layout of your build and communicate with you every step of the way. I also offer technical consulting services for webinar and event setup, email campaigns, presentation design, social media ad design, and video editing. Contact me for more details.</p>
                    </div>
                </Toggle>
                <Toggle title="Timeline for Builds">
                    <div className="answer">
                    <p>Every build and project is different. Each build is mapped out to determine the needs of the project and timeframes may vary. The number of features and the complexity of the app are taken into consideration when determining the time needed to develop an app. We can discuss options if your project is on a deadline. I also offer my services as contract work on an as-needed basis with a 24-48 hour turn around time for small projects and or content management. </p>
                    </div>
                </Toggle>
                <Toggle title="Payments Methods">
                    <div className="answer">
                    <p>Only eletronic payment methods (Credit Card, Direct Deposit, PayPal, Cash App, or Venmo) are accepted at this time and a deposit is due before any work begins. Trades and equity can be discussed and contract work is available at an hourly rate.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </FaqContainer>
    )
}

const FaqContainer = styled(About)`
    display: block;
    .freelance-title{
        display: flex;
        flex-direction: row;
    }
    h2{
        display: flex;
        padding-bottom: 1rem;
        font-weight: lighter;
    }
    span{
        font-size: 4rem;
        padding-left: 1rem;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 1rem 0rem;
        width: 100%;
    }
    .question{
        padding: 2rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 1rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }

    @media (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .freelance-title{
        display: flex;
        flex-direction: column;
        }
    }
`;

export default Freelance;
