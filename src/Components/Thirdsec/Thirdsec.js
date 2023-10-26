import React from 'react'
import "./Thirdsec.css";
import Dashboardimg from "../../Images/assets/threesecimgs/Dash.png";
import Phoneimg from "../../Images/assets/threesecimgs/Phone.png";
import TabImg from "../../Images/assets/threesecimgs/tabdash.png";
const Thirdsec = () => {
    return (
        <>
            <div className='threesec'>
                <div className='ThreeSecheadtxt'>
                    <h2>
                        Experience a sense of calm and security no matter where you are with WebGuard
                    </h2>
                    <p>
                        Our platform uses advanced encryption and other security measures to protect your sensitive data from online threats, ensuring that you can enjoy browsinf the internet without any worries. Whether you're at home, at work, or on-the-go.
                    </p>
                </div>
                <div className='threeseccard'>
                    <h3>The ultimate password protection</h3>
                    <img src={Dashboardimg} alt='' className='threeseccardimg' />
                </div>
                <div className='threeseccardt'>
                    <div className='threeseccardtwo'>
                        <h3>Efficient on tablet</h3>
                        <img src={TabImg} alt='' className='threeseccardimg' />
                    </div>
                    <div className='threeseccardtwo'>
                        <h3>Secure your password</h3>
                        <img src={Phoneimg} alt='' className='threeseccardimg' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thirdsec