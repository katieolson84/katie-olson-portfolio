import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const ContactMe= () => {
  const [state, handleSubmit] = useForm("xwkalpod");
  if (state.succeeded) {
      return <ThankYouMessage>Thank you for reaching out!</ThankYouMessage>;
  }

  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
         </Hide>
      </Title>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="10"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          SUBMIT
          
        </button>
      </form>
    </div>
  </ContactStyle>
);
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  .contact-form-container{
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 10rem 4rem 10rem; 
  }

  label{
    color: #ffffff;
    padding: 1rem 0;
    font-size: 1.5rem;
  }

  input, textarea{
    padding: .5rem .5rem;
    font-family: 'Inter', sans-serif;
  }

  button{
  margin: 1.5rem 0;
  padding: 1rem .5rem;
  width: 30%;
  }
  
  @media (max-width: 1300px) {
    padding: 1rem;
    font-size: 1rem;
    form{
      align-self: center;
      width: 70%;
    }
  }
`;
const Title = styled.div`
  margin: 0 0 4rem 8rem;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1300px) {
    margin: 2rem 0;
    justify-content: center;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const ThankYouMessage = styled.p`
  color: #ffffff;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin: 13rem 0;
  @media (max-width: 1300px){
    text-align: center;
    font-size: 2rem;
  }
`
export default ContactMe;
