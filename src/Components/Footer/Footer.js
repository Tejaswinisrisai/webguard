import React from 'react'
import "./Footer.css";
import Wlogo from "../../Images/w-logo.png"
import Facebookico from "../../Images/footicons/icons8-facebook-100.png"
import Instaico from "../../Images/footicons/icons8-instagram-100.png"
import linkedinico from "../../Images/footicons/icons8-linkedin-100.png"
import Twitterico from "../../Images/footicons/icons8-twitter-100.png"
const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <div className='footsecone'>
                        <div >
                            <div className='footerhead'>
                                <img src={Wlogo} alt='' style={{ width: '4rem', height: "4rem" }} />
                                <h2>
                                    WebGuard
                                </h2>
                            </div>
                            <p className='footp'>
                                Discover the full scope of our services and see how we can help you.
                            </p>
                        </div>
                        <div className='uls'>
                            <ul>
                                <a> <li>Products</li></a>
                                <a> <li>Communication</li></a>
                                <a> <li>Remote Access</li></a>
                                <a> <li>View All Products</li></a>
                            </ul>
                            <ul>
                                <a> <li>Company</li></a>
                                <a> <li>About Us</li></a>
                                <a> <li>Careers</li></a>
                                <a> <li>Partners</li></a>
                                <a> <li>Newsroom</li></a>
                                <a> <li>Contact Us</li></a>
                            </ul>
                            <ul>
                                <a> <li>Features</li></a>
                                <a> <li>Autofill</li></a>
                                <a> <li>password Vault</li></a>
                                <a> <li>Digital Wallet</li></a>
                                <a> <li>Password Manager</li></a>
                                <a> <li>Dark Monitoring</li></a>
                                <a> <li>Authenticator</li></a>
                            </ul>
                            <ul>
                                <a> <li>Resources</li></a>
                                <a> <li>My Account</li></a>
                                <a> <li>Support</li></a>
                                <a> <li>Blog</li></a>
                                <a> <li>Partners</li></a>
                                <a> <li>Community</li></a>
                                <a> <li>Privacy Policy</li></a>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>
                <hr className="foothrstl" />
                <div className='footsectwo'>
                    <p className='copyfontstl'>
                        &#169; 2023 WebGuard. All rights are reserved.
                    </p>
                    <div>
                        <a href=''><img src={Twitterico} alt='' className='footicostl' /></a>
                        <a href=''><img src={linkedinico} alt='' className='footicostl' /></a>
                        <a href=''><img src={Instaico} alt='' className='footicostl' /></a>
                        <a href=''><img src={Facebookico} alt='' className='footicostl' /></a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer