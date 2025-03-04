// import React from 'react';
// import './header.css';
// import logo from '../assets/logo/logo.jpg';



// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header__logo">
//         <a href='/'><img src={logo} alt="Company Logo" /></a>
//       </div>
//       <nav className="header__nav">
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/products">Men</a></li>
//           <li><a href="/products">Women</a></li>
//           <li><a href="/products">Kids</a></li>
//           <li><a href="/about">About Us</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </nav>
//       <div className="header__search">
//         <input type="text" placeholder="Search..." size="40"/>
//         <button>Search</button>
//       </div>
//       <div className="header__user">
//         <a href="/login">Login</a>
//         <a href="/cart">Cart</a>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React from 'react';
import './header.css';
import logo from '../assets/logo/logo.png'; // Your logo image


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href='/'><img src={logo} alt="Company Logo" className="logo" /></a>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products/men">Men</a></li>
          <li><a href="/products/women">Women</a></li>
          <li><a href="/products/kids">Kids</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header__search">
        <input className="search" type="text" placeholder="Search for products, brands, or more..." />
        <button className="search-btn">Search</button>
      </div>
      <div className="header__user">
        <a href="/login" className="login-btn">Login</a>
        <a href="/cart" className="cart-btn">
          <span className="cart-icon">🛒</span> Cart
        </a>
      </div>
    </header>
  );
};

export default Header;
