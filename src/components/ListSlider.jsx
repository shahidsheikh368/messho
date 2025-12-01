// import React from 'react'
// import "./ListSlider.css"

// export default function ListSlider() {
//   return (
//     <>
//         <div className="list-slider">
//         <ul>
//             <li><a href="#">Women Ethnic</a></li>
//             <li><a href="#">Women Western</a></li>
//             <li><a href="#">men</a></li>
//             <li><a href="#">kids</a></li>
//             <li><a href="#">Home & Kitchen</a></li>
//             <li><a href="#">Beauty & Health</a></li>
//             <li><a href="#">Jewellery & Accessories</a></li>
//             <li><a href="#">Bags & Footwear</a></li>
//             <li><a href="#">Electronics</a></li>
//             <li><a href="#">Sports & Fitness</a></li>
//             <li><a href="#">Sports & Fitness</a></li>
//             <li><a href="#">Office Supplies & Stationery</a></li>
//             <li><a href="#">Pet Supplies</a></li>
//             <li><a href="#">Food & Drinks</a></li>
//             <li><a href="#">Musical Instruments</a></li>
//             <li><a href="#">books</a></li>
//         </ul>

//     </div>
//     </>
//   )
// }






// import React, { useState } from "react";
// import "./ListSlider.css";

// export default function ListSlider() {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const categories = [
//     {
//       name: "Women Ethnic",
//       sub: [
//         {
//           title: "Sarees",
//           items: [
//             "All Sarees",
//             "Silk Sarees",
//             "Banarasi Sarees",
//             "Cotton Sarees",
//             "Georgette Sarees",
//             "Chiffon Sarees",
//             "Net Sarees",
//           ],
//         },
//         {
//           title: "Kurtis",
//           items: [
//             "All Kurtis",
//             "Anarkali Kurtis",
//             "Rayon Kurtis",
//             "Cotton Kurtis",
//             "Chikankari Kurtis",
//           ],
//         },
//         {
//           title: "Kurta Sets",
//           items: [
//             "All Kurta Sets",
//             "Palazzo Sets",
//             "Pant Sets",
//             "Sharara Sets",
//           ],
//         },
//         {
//           title: "Dupatta Sets",
//           items: ["Cotton Sets", "Rayon Sets", "Printed Sets"],
//         },
//         {
//           title: "Suits & Dress Material",
//           items: [
//             "All Suits",
//             "Cotton Suits",
//             "Embroidered Suits",
//             "Crepe Suits",
//             "Silk Suits",
//           ],
//         },
//         {
//           title: "Lehengas",
//           items: [
//             "All Lehengas",
//             "Net Lehengas",
//             "Bridal Lehengas",
//             "Partywear Lehengas",
//           ],
//         },
//         {
//           title: "Other Ethnic",
//           items: [
//             "Blouses",
//             "Gowns",
//             "Islamic Fashion",
//             "Petticoats",
//           ],
//         },
//       ],
//     },
//     { name: "Women Western" },
//     { name: "Men" },
//     { name: "Kids" },
//     { name: "Home & Kitchen" },
//     { name: "Beauty & Health" },
//     { name: "Jewellery & Accessories" },
//     { name: "Bags & Footwear" },
//     { name: "Electronics" },
//   ];

//   return (
//     <div
//       className="list-slider"
//       onMouseLeave={() => setActiveMenu(null)}
//     >
//       <ul>
//         {categories.map((cat, i) => (
//           <li
//             key={i}
//             onMouseEnter={() => setActiveMenu(cat.name)}
//           >
//             <a href="#">{cat.name}</a>
//           </li>
//         ))}
//       </ul>

//       {activeMenu === "Women Ethnic" && (
//         <div className="mega-dropdown">
//           {categories[0].sub.map((section, index) => (
//             <div key={index} className="mega-col">
//               <h4>{section.title}</h4>
//               {section.items.map((item, i) => (
//                 <p key={i}>{item}</p>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState } from "react";
import "./ListSlider.css";

export default function ListSlider() {
  const [activeMenu, setActiveMenu] = useState(null);

  const categories = [
    {
      name: "Women Ethnic",
      sub: [
        {
          title: "Sarees",
          items: ["All Sarees", "Silk Sarees", "Cotton Sarees", "Georgette Sarees"],
        },
        {
          title: "Kurtis",
          items: ["All Kurtis", "Anarkali Kurtis", "Rayon Kurtis"],
        },
        {
          title: "Lehengas",
          items: ["All Lehengas", "Bridal Lehengas", "Partywear Lehengas"],
        },
      ],
    },
    {
      name: "Women Western",
      sub: [
        {
          title: "Tops",
          items: ["All Tops", "Crop Tops", "Tunics", "Shirts"],
        },
        {
          title: "Dresses",
          items: ["Bodycon", "Maxi Dress", "A-Line Dress"],
        },
        {
          title: "Jeans",
          items: ["High Waist", "Boyfriend", "Skinny Jeans"],
        },
      ],
    },
    {
      name: "Men",
      sub: [
        {
          title: "Top Wear",
          items: ["T-Shirts", "Shirts", "Jackets", "Sweatshirts"],
        },
        {
          title: "Bottom Wear",
          items: ["Jeans", "Trousers", "Track Pants"],
        },
        {
          title: "Ethnic Wear",
          items: ["Kurtas", "Sherwanis", "Nehru Jackets"],
        },
      ],
    },
    {
      name: "Kids",
      sub: [
        {
          title: "Boys",
          items: ["T-Shirts", "Shorts", "Ethnic Wear"],
        },
        {
          title: "Girls",
          items: ["Dresses", "Frocks", "Skirts"],
        },
      ],
    },
    {
      name: "Home & Kitchen",
      sub: [
        {
          title: "Home Decor",
          items: ["Wall Art", "Showpieces", "Lighting"],
        },
        {
          title: "Kitchen",
          items: ["Cookware", "Storage", "Appliances"],
        },
      ],
    },
    { name: "Beauty & Health" ,
      sub: [
        {
          title: "Tops",
          items: ["All Tops", "Crop Tops", "Tunics", "Shirts"],
        },
        {
          title: "Dresses",
          items: ["Bodycon", "Maxi Dress", "A-Line Dress"],
        },
        {
          title: "Jeans",
          items: ["High Waist", "Boyfriend", "Skinny Jeans"],
        },
      ],
    },
    { name: "Jewellery & Accessories",

      sub: [
        {
          title: "Tops",
          items: ["All Tops", "Crop Tops", "Tunics", "Shirts"],
        },
        {
          title: "Dresses",
          items: ["Bodycon", "Maxi Dress", "A-Line Dress"],
        },
        {
          title: "Jeans",
          items: ["High Waist", "Boyfriend", "Skinny Jeans"],
        },
      ],
     },
    { name: "Bags & Footwear",
      sub: [
        {
          title: "Tops",
          items: ["All Tops", "Crop Tops", "Tunics", "Shirts"],
        },
        {
          title: "Dresses",
          items: ["Bodycon", "Maxi Dress", "A-Line Dress"],
        },
        {
          title: "Jeans",
          items: ["High Waist", "Boyfriend", "Skinny Jeans"],
        },
      ],
     },
    { name: "Electronics",sub: [
        {
          title: "Tops",
          items: ["All Tops", "Crop Tops", "Tunics", "Shirts"],
        },
        {
          title: "Dresses",
          items: ["Bodycon", "Maxi Dress", "A-Line Dress"],
        },
        {
          title: "Jeans",
          items: ["High Waist", "Boyfriend", "Skinny Jeans"],
        },
      ],
     },
  ];

  const activeCategory = categories.find((c) => c.name === activeMenu);

  return (
    <div
      className="list-slider"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <ul>
        {categories.map((cat, i) => (
          <li
            key={i}
            onMouseEnter={() => setActiveMenu(cat.name)}
          >
            <a href="#">{cat.name}</a>
          </li>
        ))}
      </ul>

      {activeCategory?.sub && (
        <div className="mega-dropdown">
          {activeCategory.sub.map((section, index) => (
            <div key={index} className="mega-col">
              <h4>{section.title}</h4>
              {section.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
