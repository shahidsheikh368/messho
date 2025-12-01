import React from 'react'
import "./Return.css"
import Returns  from '../assets/img/returns.svg'
import Case from '../assets/img/cod.svg'
import Lowestprice from '../assets/img/lowest-price.svg'
export default function Return() {
  return (
    <>
        <div className="return-case-lprice">
        <div className="return-case-lprice-camtaint">
        <img src={Returns} alt="img"/>
       <p>7 Days Easy Return </p> 
       <p id="return-case-lpric-p">|</p>
       <img src={Case} alt="img"/>
       <p>Cash on Delivery</p>
       <p id="return-case-lpric-p">|</p>
        <img src={Lowestprice} alt="img"/>
       <p>Lowest Prices</p>
       </div>
    </div>


    </>
  )
}
