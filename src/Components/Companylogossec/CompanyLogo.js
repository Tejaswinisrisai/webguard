import React from 'react'
import "./CompanyLogo.css";
import Netflix from "../../Images/assets/companylogos/Netflix_Logo_PMS.png";
import Spotify from "../../Images/assets/companylogos/Spotify_Logo_RGB_Green.png";
import Salesforce from "../../Images/assets/companylogos/salesforce.png";
import Microsoft from "../../Images/assets/companylogos/Microsoft-Logo.png";
import Mcafee from "../../Images/assets/companylogos/mcafee.png";
import Loom from "../../Images/assets/companylogos/loom.png";
import Livechat from "../../Images/assets/companylogos/livechat.png";
import Hubspot from "../../Images/assets/companylogos/hubspot.png";
const CompanyLogo = () => {
    return (
        <>
            <div className='companylogosdiv'>
                <img src={Netflix} alt='' className='cmpnylogo' />
                <img src={Spotify} alt='' className='cmpnylogo' />
                <img src={Mcafee} alt='' className='cmpnylogo' />
                <img src={Salesforce} alt='' className='cmpnylogo' />
                <img src={Microsoft} alt='' className='cmpnylogo' />
                <img src={Loom} alt='' className='cmpnylogo' />
                <img src={Hubspot} alt='' className='cmpnylogo' />
                <img src={Livechat} alt='' className='cmpnylogo' />
            </div>
        </>
    )
}

export default CompanyLogo