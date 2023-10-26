import React from 'react'
import "./Foursec.css";
import Individual from "../../src/Images/assets/foursecimgs/single96.png";
import Multiple from "../../src/Images/assets/foursecimgs/multiple64.png";
import Checkmark from "../../src/Images/assets/foursecimgs/checkmark96.png";
import Arrow from "../../src/Images/assets/foursecimgs/arrow32.png";

const Foursec = () => {
    return (
        <>
            <div className='foursec'>
                <div className='FourSecheadtxt'>
                    <h2>
                        Find the perfect subscription to meet your unique requirements
                    </h2>
                    <p>
                        Looking for a subscription that fits your unique needs? Look no further, With our platform, you can find the perfect subscription plan that caters to your specific requirements.
                    </p>
                </div>
                <div className='prccardsec'>
                    <div className='firsthalf'>
                        <div className='prccardheadsec'>
                            <img src={Individual} alt='' style={{ width: "3.3rem", height: "3.3rem" }} />
                            <div className='tlts'>
                                <h5>For Individuals</h5>
                                <h2>Individual Starter Pack</h2>
                            </div>
                        </div>
                        <p>
                            Password management for one type of device that is easy to use and is reliable, secure and easy to use.
                        </p>
                        <div>
                            <span className='price'>
                                $12
                            </span><span className='mth'>/month</span>
                        </div>
                        <button className='pricebtn'>
                            Get Started <img src={Arrow} style={{ width: "1.2rem", width: "1.2rem" }} />
                        </button>
                    </div>
                    <div className='lstsec'>
                        <h2>
                            What's included
                        </h2>
                        <div className='ulsec'>
                            <ul>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li >
                                        Unlimited Passwords
                                    </li>
                                </div>

                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        1 User Account
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Access on 1 Device Type
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Save and Autofill Passwords
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        One-to-One Sharing
                                    </li>
                                </div>
                            </ul>
                            <ul className='ulsec2'>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Password Generator
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Security Dashboard
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Dark Web Monitoring
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Passwordless Login
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='prccardsec'>
                    <div className='firsthalf'>
                        <div className='prccardheadsec'>
                            <img src={Multiple} alt='' style={{ width: "3.3rem", height: "3.3rem" }} />
                            <div className='tlts'>
                                <h5>For Enterprise</h5>
                                <h2>Enterprise Starter Pack</h2>
                            </div>
                        </div>
                        <p>
                            A full range if business features as well as services customized to your large business needs </p>
                        <div>
                            <span className='price'>
                                $94
                            </span><span className='mth'>/month</span>
                        </div>
                        <button className='pricebtn'>
                            Get Started <img src={Arrow} style={{ width: "1.2rem", width: "1.2rem" }} />
                        </button>
                    </div>
                    <div className='lstsec'>
                        <h2>
                            What's included
                        </h2>
                        <div className='ulsec'>
                            <ul>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li >
                                        Unlimited Passwords
                                    </li>
                                </div>

                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        50 User Accounts
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Access Across All Device Type
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        1GB Encrypted File Storage
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        One-to-many Sharing
                                    </li>
                                </div>
                            </ul>
                            <ul className='ulsec2'>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Password Generator
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Security Dashboard
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Dark Web Monitoring
                                    </li>
                                </div>
                                <div className='listl'>
                                    <img src={Checkmark} alt='' style={{ width: "1.3rem", height: "1.3rem" }} />
                                    <li>
                                        Passwordless Login
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='blackdiv'>
                    <div className='blackdivp1'>
                        <p className='p1'>Get to know about all product's pricing</p>
                        <p className='p2'>Our platform offers a range of subscription plans that are tailored to your unique requirements, allowing you to find the perfect fit for you</p>
                    </div>
                    <div className='blackdivp2'>
                        <button className='blckpricebtn'>
                            See more pricing <img src={Arrow} style={{ width: "1.2rem", width: "1.2rem", marginLeft: "0.8rem" }} />
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Foursec