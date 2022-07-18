import React from 'react'
import {useNavigate} from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <section>
    <h1>About</h1>
    <button onClick={ gotoContact}>Go to Contact</button>
    <button onClick={() => navigate(-1)}>Go Back</button>
    </section> 
    </>
  );
};

export default About