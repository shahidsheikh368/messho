import React from 'react'
import "./Midsection.css"

import Mainimg from '../assets/img/m-second-containt.webp'
import Lehnga from '../assets/img/lehnga.webp'
import Menwear from '../assets/img/menwear2.webp'
import Jwelarry from '../assets/img/jewellery.webp'
import Sarry from '../assets/img/sarees.webp'
export default function Midsection() {
  return (
    
    <>
            <div className="mid-section-img">
    <a href="#">
        <img src={Mainimg} alt="Gold Banner"/>
    </a>

    <div className="mid-section-child-img">
        <a href="#">
            <img src={Lehnga} alt="Lehengas"/>
        </a>
        <a href="#">
            <img src={Menwear} alt="Menwear"/>
        </a>
        <a href="#">
            <img src={Jwelarry} alt="Jewellery"/>
        </a>
        <a href="#">
            <img src={Sarry} alt="Sarees"/>
        </a>
    </div>

    <a href="#" className="mid-shop-btn">Shop Now</a>
</div>
    
    </>
  )
}
