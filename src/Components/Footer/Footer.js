import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="inner-footer">
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

        <p className="footerContent">
        
    
            Copyright &copy;Evelyn Nguyen, All Rights Reserved 2020 <br />
            <p>FAQ</p>
        <p>Contact us @ 666-666-6666</p>
          <a
            href="https://www.facebook.com/"
            rel="noopener"
          >facebook<i className="fab fa-facebook"></i
          ></a>
          <a
            href="https://twitter.com/"

            rel="noopener"
          >twitter <i className="fab fa-twitter"></i
          ></a>
          <a
            href="https://www.instagram.com/"
            rel="noopener"
          >instagram<i className="fab fa-instagram"></i
          ></a>
        </p>
        
        <br />
      </div>

    </footer>
  );
};

export default Footer