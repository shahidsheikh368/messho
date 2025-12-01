import React from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass , FaUser , FaCartShopping } from 'react-icons/fa6'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
        <header>
        <Link to="/"> <h1 id="messho-logo-name">meesho</h1></Link>
        <div className="search">
             <FaMagnifyingGlass className='i' style={{ fontSize: "20px", color: "#333" }} />
            <input type="text" placeholder="Try saree,kurti or search by product code"/>
            
        </div>
       <p>
         <Link to="/supplier">Become a Supplier</Link>
       </p>|
       <p>
        <Link to="/investor">Investor Relations</Link>
       </p>|

        <div className="icon-with-p">
          <FaUser className="i" />
         <p>
            <Link to="/Profile">Profile</Link>
         </p>

            <div className="Drop-dwon">
                <ul>
                    <li id="hellouser">Hello User</li>
                    <li>To accesess Your Meesho account</li>
                    <li><button>Sing Up </button></li>
                    <li>___________</li>
                   <li className="my-order">     
                    <i className="fa-solid fa-box"></i>
                        My Orders
                   </li>
                    <li>____________</li>
                    <li>Delete Account</li>

                </ul>
            </div>
        </div>

        <div className="icon-with-p">
            <FaCartShopping className="cart-icon" />
            <p>
                <Link to="/cart">Cart</Link>
            </p>
        </div>
    </header>
    </div>
  )
}
