import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Catagories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Acessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ea?
            Magnam quod adipisci cupiditate perferendis, quas quam impedit iste.
            Ea saepe nisi dolorum quidem quibusdam recusandae modi, a cupiditate
            aspernatur!
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ea?
            Magnam quod adipisci cupiditate perferendis, quas quam impedit iste.
            Ea saepe nisi dolorum quidem quibusdam recusandae modi, a cupiditate
            aspernatur!
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>Shopit.Pk</span>
          <span className='copyright'>
            © Copyright 2023. All rights reserved
          </span>
        </div>
        <div className='right'>
          <img src='assets/images/payment.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
