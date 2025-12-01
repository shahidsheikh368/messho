import React from 'react'
import "./Section.css"
import dress from '../assets/img/dress.webp'
import westernDress from '../assets/img/western-dress.webp'
import menswear   from '../assets/img/menswear.webp'
import footwear  from '../assets/img/footwear.webp'
import Homedeore from  '../assets/img/homedecor.webp'
import buety from '../assets/img/beauty.webp'
import Acserish from '../assets/img/accserish.webp'
import Grocery from '../assets/img/grocery.webp'


export default function Section() {
  return (
    <>
    <div className="section-img"> 
        <img src={dress} alt="img"/>
        <img src={westernDress} alt="img"/>
        <img src={menswear} alt="img"/>
        <img src={footwear} alt="img"/>
        <img src={Homedeore} alt="img"/>
        <img src={buety} alt="img"/>
        <img src={Acserish} alt="img"/>
        <img src={Grocery} alt="img"/>

     </div>

    </>
  )
}
