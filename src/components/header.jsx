import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../assets/logo/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  const [userFirstName, setUserFirstName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const firstName = localStorage.getItem('userFirstName');
    setUserFirstName(firstName || '');
  }, [navigate]);
  

  const toggleDropdown = (category) => {
    setDropdown(dropdown === category ? null : category);
  };

  const handleLogout = () => {
    localStorage.removeItem('userFirstName');
    setUserFirstName('');
    navigate('/');
  };

  const renderDropdown = (gender, items) => (
    <div className="dropdown-menu">
      <div className="dropdown-grid">
        <a href={`/products/${gender}/all`} className="shop-all">Shop All</a>
        {items.map((item, idx) => (
          <a key={idx} href={`/products/${gender}/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</a>
        ))}
      </div>
    </div>
  );

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/"><img src={logo} alt="Company Logo" className="logo" /></a>
      </div>

      <nav className="header__nav">
        <ul>
          <li><Link to="/">Home</Link></li>

          {/* Men */}
          <li
              className="dropdown-trigger"
              onMouseEnter={() => setDropdown("men")}
              onMouseLeave={() => setDropdown(null)}
          >
              MEN
            {dropdown === "men" && renderDropdown("men", [
              "Topwear", "Bottomwear", "Socks", "Watches", "Shoes", "Flip Flops", "Sandal", "Fragrance",
              "Belts", "Innerwear", "Eyewear", "Wallets", "Jewellery", "Headwear", "Free Gifts", "Ties",
              "Mufflers", "Loungewear and Nightwear", "Accessories", "Scarves", "Bags", "Gloves", "Cufflinks",
              "Skin Care", "Perfumes", "Water Bottle", "Shoe Accessories", "Bath and Body", "Stoles"
            ])}
          </li>

          {/* Women */}
          <li
              className="dropdown-trigger"
              onMouseEnter={() => setDropdown("women")}
              onMouseLeave={() => setDropdown(null)}
          >
              WOMEN

            {dropdown === "women" && renderDropdown("women", [
              "Watches", "Topwear", "Belts", "Bags", "Innerwear", "Jewellery", "Lips", "Shoes", "Saree",
              "Fragrance", "Sandal", "Nails", "Scarves", "Dress", "Loungewear and Nightwear", "Bottomwear",
              "Wallets", "Flip Flops", "Apparel Set", "Mufflers", "Skin Care", "Makeup", "Socks", "Eyewear",
              "Accessories", "Skin", "Headwear", "Beauty Accessories", "Free Gifts", "Eyes", "Bath and Body",
              "Cufflinks", "Stoles", "Hair", "Perfumes", "Umbrellas", "Vouchers"
            ])}
          </li>

          {/* Boys */}
          <li
              className="dropdown-trigger"
              onMouseEnter={() => setDropdown("boys")}
              onMouseLeave={() => setDropdown(null)}
          >
              BOYS
            {dropdown === "boys" && renderDropdown("boys", [
              "Flip Flops", "Topwear", "Shoes", "Bottomwear", "Socks", "Sandal", "Eyewear", "Apparel Set",
              "Watches", "Gloves", "Headwear", "Innerwear"
            ])}
          </li>

          {/* Girls */}
          <li
              className="dropdown-trigger"
              onMouseEnter={() => setDropdown("girls")}
              onMouseLeave={() => setDropdown(null)}
          >
              GIRLS
            {dropdown === "girls" && renderDropdown("girls", [
              "Topwear", "Bottomwear", "Dress", "Sandal", "Watches", "Shoes", "Flip Flops", "Innerwear",
              "Gloves", "Socks", "Headwear", "Apparel Set", "Eyewear", "Jewellery", "Bags"
            ])}
          </li>

          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="header__search">
        <input className="search" type="text" placeholder="Search for products, brands, or more..." />
        <button className="search-btn">Search</button>
      </div>

      <div className="header__user">
        {userFirstName ? (
          <>
            <span className="login-btn">Hi, {userFirstName}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
        <Link to="/cart" className="cart-btn">
          <span className="cart-icon">🛒</span> Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;