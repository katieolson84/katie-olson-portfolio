import React from 'react'
import hi from '../images/hi.jpeg'

const About = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div classname="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div classname="hide">
                        <h2>your <span>dreams</span> come
                        </h2>
                    </div>
                    <div classname="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact me if you are interested in custom development work.</p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={hi} alt="hi neon sign"/>
            </div>
        </div>
    )
}

export default About;
