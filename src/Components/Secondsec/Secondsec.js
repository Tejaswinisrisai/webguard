import React from 'react'
import Logingo from "../../Images/assets/images/loginngo.jpg"
import DarkWeb from "../../Images/assets/images/darkwebmonitoring.jpg"
import Authentication from "../../Images/assets/images/authentication.jpg"
import Passlesslogin from "../../Images/assets/images/passlesslogin.jpg"
import './Secondsec.css';
const Secondsec = () => {
    return (
        <>
            <div className='secondSec'>
                <div className='Secheadtxt'>
                    <h2>
                        Automate the manage of all your passwords with our auto-pilot feature
                    </h2>
                    <p>
                        Welcome to our password management platform, when you can put your password management on auto-pilot, With our auto-pilot feature, you can effortlessly manage all of your passwords in one place.
                    </p>
                </div>
                <div className='secondsecimgcards'>
                    <div className='imgcard'>
                        <div className='secondseccardtext'>
                            <h3>
                                Login and go
                            </h3>
                            <p>
                                Once you save a password in WebGuard, you'll always have it when you need it logging in is fase and easy
                            </p>
                        </div>
                        <img src={Logingo} alt='' className='imgszstl' />
                    </div>
                    <div className='imgcard'>
                        <div className='secondseccardtext spcstl'>
                            <h3>
                                Dark web monitoring
                            </h3>
                            <p>
                                Stop worrying about data branches. Get alerts if your personal information is ar risk.
                            </p>
                        </div>
                        <img src={DarkWeb} alt='' className='imgszstl' />
                    </div>

                    <div className='imgcard'>
                        <div className='secondseccardtext'>
                            <h3>
                                Two-factor authentication
                            </h3>
                            <p>
                                Easily identify websites where you can turn on two-factor authentication and use WebGuard as an authenticator.
                            </p>
                        </div>
                        <img src={Authentication} alt='' className='imgszstl' />

                    </div>
                    <div className='imgcard'>
                        <div className='secondseccardtext'>
                            <h3>
                                Passwordless login
                            </h3>
                            <p>
                                Gain instant access to your WebGuard vault by using the WebGuard Authenticator instead of your master password.
                            </p>
                        </div>
                        <img src={Passlesslogin} alt='' className='imgszstl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Secondsec