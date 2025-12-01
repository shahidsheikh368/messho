


import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../ContextData";
import "./Product.css";
import Preetywomensaree from "../assets/img/women-short.avif";
import Saree from "../assets/img/sarees.webp";
import EliteCunkey from "../assets/img/elite-cunkey-rakhi.avif";
import Kurtii from "../assets/img/kurtii.avif";
import Cutipy from "../assets/img/cutipy-trend-boys.avif";
import BlueHead from "../assets/img/blue head.avif";
import GharShop from "../assets/img/ghar-shop.avif";
import MenShirt from "../assets/img/men-shirt.avif";
import EliteRakhi from "../assets/img/elite-rakhi.avif";
import MoneyBox from "../assets/img/money-boxes.avif";
import FabulousSaree from "../assets/img/fabuless-saree.avif";
import PrettyGraceful from "../assets/img/pretty-gracfull-womens.avif";
import StylisFabulous from "../assets/img/stylis-fabulous-women.avif";
import SuperiorWomen from "../assets/img/superior-women.avif";
import EnsmbleSaree from "../assets/img/ensmble-sarree.avif";

import MensSneaker from "../assets/img/denim-jacket.avif";
import PearlNecklace from "../assets/img/men-perfume.webp";
import CottonBedsheet from "../assets/img/baby-blanket.avif";
import AnalogWatch from "../assets/img/analog-watch.avif";
import KidsPartyDress from "../assets/img/kids-party-dress.avif";
import FloralKurta from "../assets/img/floral-kurta.avif";
import TrendyHandbag from "../assets/img/trendy-handbag.avif";
import BathTowel from "../assets/img/bath-towel.avif";
import WirelessEarbuds from "../assets/img/wireless-earbuds.avif";
import WallClock from "../assets/img/wall-clock.avif";
import PalazzoSet from "../assets/img/palazzo-set.avif";
import DenimJacket from "../assets/img/denim-jacket.avif";
import BabyBlanket from "../assets/img/baby-blanket.avif";
import TableLamp from "../assets/img/table-lamp.avif";



export default function Product() {

  const {addToCart} = useContext(Data)

  const products= [
    { id: 1, name: "Pretty Fabulous women...", price: 293, image: Saree, rating: 4.5, freeDelivery: true },
    { id: 2, name: "Adrika Enesmble sarres", price: 498, image: Preetywomensaree, rating: 4.5, freeDelivery: true },
    { id: 3, name: "Elite Cunkey rakhi", price: 160, image: EliteCunkey, rating: 4.5, freeDelivery: true },
    { id: 4, name: "Women T-shirt", price: 299, image: Kurtii, rating: 4.5, freeDelivery: true },
    { id: 5, name: "cutipie Trendy Boys T..", price: 10, image: Cutipy, rating: 4.5, freeDelivery: true },
    { id: 6, name: "Bluetooth Headphons...", price: 245, image: BlueHead, rating: 3.9, freeDelivery: true },
    { id: 7, name: "GHAR SOAPS M..", price: 189, image: GharShop, rating: 4.5, freeDelivery: true },
    { id: 8, name: "trendy Retro Men Shirt...", price: 110, image: MenShirt, rating: 4.0, freeDelivery: true },
    { id: 9, name: "Elite Chunky Rakhi..", price: 160, image: EliteRakhi, rating: 4.0, freeDelivery: true },
    { id: 10, name: "Amazing Money Boxes...", price: 149, image: MoneyBox, rating: 4.0, freeDelivery: true },
    { id: 11, name: "Jivika Fabulous Sarees...", price: 340, image: FabulousSaree, rating: 3.9, freeDelivery: true },
    { id: 12, name: "pretty Graceful Womens", price: 110, image: PrettyGraceful, rating: 4.2, freeDelivery: true },
    { id: 13, name: "Stylis Fabulous Women...", price: 329, image: StylisFabulous, rating: 4.5, freeDelivery: true },
    { id: 14, name: "pretty Graceful Womens", price: 50, image: SuperiorWomen, rating: 4.2, freeDelivery: true },
    { id: 15, name: "Adrika Enesmble sarres", price: 498, image: EnsmbleSaree, rating: 4.5, freeDelivery: true },
    { id: 16, name: "Adrika Enesmble sarres", price: 498, image: Preetywomensaree, rating: 4.5, freeDelivery: true },
   
  { id: 17, name: "Trendy Men’s Casual Sneakers", price: 599, image: MensSneaker, rating: 4.3, freeDelivery: true },
  { id: 18, name: "Elegant Pearl Necklace Set", price: 289, image: PearlNecklace, rating: 4.6, freeDelivery: true },
  { id: 19, name: "Soft Cotton Bedsheet King Size", price: 499, image: CottonBedsheet, rating: 4.4, freeDelivery: true },
  { id: 20, name: "Stylish Analog Wrist Watch", price: 399, image: AnalogWatch, rating: 4.2, freeDelivery: true },
  { id: 21, name: "Kids Fancy Party Dress", price: 459, image: KidsPartyDress, rating: 4.7, freeDelivery: true },
  { id: 22, name: "Women’s Floral Printed Kurta", price: 349, image: FloralKurta, rating: 4.5, freeDelivery: true },
  { id: 23, name: "Trendy Handbag for Women", price: 320, image: TrendyHandbag, rating: 4.3, freeDelivery: true },
  { id: 24, name: "Premium Cotton Bath Towel", price: 229, image: BathTowel, rating: 4.1, freeDelivery: true },
  { id: 25, name: "Wireless Earbuds Pro 5.0", price: 649, image: WirelessEarbuds, rating: 4.4, freeDelivery: true },
  { id: 26, name: "Designer Wall Clock", price: 549, image: WallClock, rating: 4.5, freeDelivery: true },
  { id: 27, name: "Printed Women Palazzo Set", price: 379, image: PalazzoSet, rating: 4.6, freeDelivery: true },
  { id: 28, name: "Trendy Men’s Denim Jacket", price: 899, image: DenimJacket, rating: 4.8, freeDelivery: true },
  { id: 29, name: "Soft Baby Blanket Combo", price: 299, image: BabyBlanket, rating: 4.7, freeDelivery: true },
  { id: 30, name: "Elegant Table Lamp", price: 459, image: TableLamp, rating: 4.3, freeDelivery: true }
];




  const Navigate = useNavigate();

    // const gotocart = ()=>{
    //   Navigate("/cart")
    // }

    const handleCart = (item)=>{
      addToCart(item);
      Navigate("/cart")
    }
  return (
    <div className="multi-img-conteners-right-side">
      
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} className="product-image" />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <p>Rating: {item.rating}⭐</p>
          {item.freeDelivery && <span>Free Delivery</span>}
          <button className="add-to-cart-btn"
          
          onClick={()=> handleCart(item)} >Add to Cart</button>

           <button className="buy-now"
          
          >Buy    </button>

        </div>
      ))}
    </div>

  );
}
