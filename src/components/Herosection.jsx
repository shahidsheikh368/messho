import React from 'react'
import top from '../assets/top-containdt-img.webp';
import "./Herosection.css"
export default function Herosection() {
  return (
    <>
    <div className="top-img">
        <img src={top} alt="img"/>
        
        <div className="img-p-btn">
            <p><span>Smart Shopping</span></p>
              <p><span>Trusted By Millons</span></p>
        <button id="shop-now-btn"><a href="#">Shop Now</a></button>
        </div>

    </div>
    </>
  )
}
