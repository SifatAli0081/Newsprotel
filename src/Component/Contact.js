import React from 'react'
import {useNavigate} from "react-router-dom"
const Contact = () => {
    const navigate = useNavigate();
  const gotoAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <section>
    <h1>Contact</h1>
    <button onClick={gotoAbout}>Go to About</button>
    <button onClick={() => navigate(-1)}>Go Back</button>

    </section> 
    </>
  )
}

export default Contact