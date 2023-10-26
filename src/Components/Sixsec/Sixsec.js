import React from 'react'
import "./Sixsec.css";
import Halfdash from "./halfdash.png";
const Sixsec = () => {
  return (
    <>
      <div className='Sixsec'>
        <div>
          <div className='Contentsix'>
            <h2>
              Experience a sense of calm and security no matter where you are with WebGuard.
            </h2>
            <p>
              Our platform uses advanced encryption and other security measures to protect your sensitive data online threats, ensuring that you enjoy browsing the internet without any worries.
            </p>
          </div>
          <div className='buttonstle'>
            <button className='learnBtn' style={{ border: "1px solid white", }}>Try WebGuard Now &#x2B21;</button>
            <button className='learnBtn' style={{ backgroundColor: "white", color: "black", width: "10rem" }}>Learn more &#x2192;</button>
          </div>
        </div>
        <img src={Halfdash} alt='' />
      </div >

    </>
  )
}

export default Sixsec;