// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import ListSlider from './components/ListSlider'
// import Herosection from './components/Herosection'
// import Return from './components/Return'
// import Midsection from './components/Midsection'
// import Product from './components/product'
// import Section from './components/Section'
// import Cart from './components/Cart'
// import SendContaxt from './SendContaxt'
// import Profile from './components/Profile'

// export default function App() {
//   return (
//     <SendContaxt>

//     <BrowserRouter>
     
//       <Navbar />

//       <Routes>
       
//         <Route path='/' element={
//           <>
//             <ListSlider />
//             <Herosection />
//             <Return />
//             <Section />
//             <Midsection />
//             <Product />
//           </>
//         } />

       
//         <Route path='/profile' element={<Profile />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//         </SendContaxt>
//   )
// }




import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ListSlider from "./components/ListSlider";
import Herosection from "./components/Herosection";
import Return from "./components/Return";
import Midsection from "./components/Midsection";
import Product from "./components/Product";

import Section from "./components/Section";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import SendContaxt from "./SendContaxt";
import Supplier from "./components/Supplier";
import Investor from "./components/Investor";
import SignUp from "./components/SingUp";
import Footer from "./components/Footer";

function PageContent() {
  const location = useLocation();
  
  // ✅ Hide navbar only on profile page
  const shouldShowNavbar = location.pathname !== "/profile" && location.pathname !== "/signup";

  

  console.log("📍 Pathname:", location.pathname);
  console.log("🎯 Show Navbar?", shouldShowNavbar);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <ListSlider />
            <Herosection />
            <Return />
            <Section />
            <Midsection />
            <Product />
            <Footer/>
          </>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/supplier" element={<Supplier/>}/>
        <Route path="/investor" element={<Investor/>}/> 
         <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <SendContaxt>
      <BrowserRouter>
        <PageContent />
      </BrowserRouter>
    </SendContaxt>
  );
}