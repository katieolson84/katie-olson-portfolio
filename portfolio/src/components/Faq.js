import React from 'react'
// styles
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const Faq = () => {
    const [element, controls] = useScroll();
    return (
        <FaqContainer
            variants={scrollReveal}
            ref={element}
            animate={controls}
            initial="hidden"
        >
            <h2>
                Available for<span>Freelance</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="Services Offered">
                    <div className="answer">
                        <p>I have teamed up with an experienced UX/UI designer to provide a complete package of services. Together we create logos, dynamite websites, complete branding packages, and custom software. We map out the design and layout of your build and communicate with you every step of the way. Contact me for more details.</p>
                    </div>
                </Toggle>
                <Toggle title="Timeline for Builds">
                    <div className="answer">
                    <p>Every build is different. Each build is mapped out to determine the needs of the project and timeframes may vary. The number of features and the complexity of the app are taken into consideration when determining the time needed to develop an app. We can discuss options if your project is on a deadline.</p>
                    </div>
                </Toggle>
                <Toggle title="Payments Methods">
                    <div className="answer">
                    <p>Only eletronic payment methods (PayPal, Cash App or Venmo) are accepted at this time and a deposit is due before any work begins. Trades and equity can be discussed.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </FaqContainer>
    )
}

const FaqContainer = styled(About)`
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
