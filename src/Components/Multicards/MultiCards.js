import React from 'react';
import './MultiCards.css';
import si from "../../Images/l2.png";
import sm from "../../Images/social-media-icons.png";
import dl from '../../Images/deviceslist2.png';
import bgv from "./../../Images/earth.mp4"
const MultiCards = () => {
    return (<>
        <div className='cardsDiv'>
            <div className='card c1'>
                <img src={sm} alt='sm ' className='multicrdimg' style={{ width: '100%' }} />
            </div>
            <div className='card c2'>
                <img src={si} alt='sm' className='multicrdimg' style={{ width: '100%' }} />
            </div>
            <div className='card c3'>
                <img src={dl} alt='sm' className='multicrdimg' style={{ width: '100%' }} />
            </div>
        </div>
    </>
    )
}

export default MultiCards;