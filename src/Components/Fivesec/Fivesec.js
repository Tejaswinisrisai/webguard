import React from 'react'
import "./Fivesec.css";
import Userlogo from "./maleuser100.png";

const Fivesec = () => {
    return (
        <>
            <div className='FiveSec'>
                <div className='FiveSecheadtxt'>
                    <h2>
                        Be a part of the satisfied  WebGuard users today and hear firsthand what our customers are saying about us!
                    </h2>
                    <p>
                        Join the satisfied commmunity of WebGuard users today and discover why our customers rave  about our services! Hear firsthand what they have to say and experience the peace of mind that come with top-notch online security.
                    </p>
                </div>
                <div className='divssec'>
                    <div className='abc'></div>
                    <div className='def'></div>
                    <div className='xyz'>
                        <div className='fiveseccontent'>
                            <div >
                                <p className='testimonitxt'>
                                    This password manager is hands down the best on the marker. It's easy to use, affordable, and has saveed me from the headache of managing my passwords on my own
                                </p>
                            </div>
                            <hr className='hrstl' />
                            <div className='testimonial'>
                                <img src={Userlogo} alt='' className='userwhitelogo' />
                                <div className='testitxt'>
                                    <p className='testitxtp1'>Hassan Momayed</p>
                                    <p className='testitxtp2'>UI/UX Designer at Kopo Creativee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fivesec