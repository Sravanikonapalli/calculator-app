import {BsDiamondFill} from 'react-icons/bs'

import {FaLinkedin, FaInstagram, FaGoogle, FaApple} from 'react-icons/fa'
import {IoIosPhonePortrait} from 'react-icons/io'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="first-part">
      <div className="be-the-first-konow">
        <h1 className=" heading">BE THE FIRST TO KNOW</h1>
        <p className="text">Sign up for updates from meta muse</p>
        <div className="email-and-button">
          <input
            type="text"
            className="email"
            placeholder="Enter your e-mail..."
          />
          <button className="subscribe-btn" type="button">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="contant-us-con">
        <h1 className="heading">CONTACT US</h1>
        <p className="text">+44 221 133 4567</p>
        <p className="text">customercare@metamuse.com</p>
        <h2 className="heading">CURRENCY</h2>
        <div className="usd-con">
          <img
            src="data:image/jpeg;base64,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"
            alt="usd"
            className="img"
          />
          <h3 className="heading">
            <span>
              <BsDiamondFill size={20} />
            </span>
            USD
          </h3>
        </div>
        <p className="text">
          Transactions will be completed in Euros and currency reference is
          available in hover
        </p>
      </div>
    </div>
    <hr className="horizontal-line" />
    <div className="second-part">
      <div className="sub-part">
        <h1 className="heading">metta muse</h1>
        <p className="text">About Us </p>
        <p className="text">Stories</p>
        <p className="text">Artisans</p>
        <p className="text">Boutiques</p>
        <p className="text">Contact Us</p>
        <p className="text">EU Compliances Docs</p>
      </div>
      <div className="sub-part">
        <h1 className="heading">QUICK LINKS</h1>
        <p className="text">Orders & Shipping</p>
        <p className="text">Join/Login as a Seller</p>
        <p className="text">Payment & Pricing</p>
        <p className="text">Return & Refunds</p>
        <p className="text">FAQs</p>
        <p className="text">Privacy Policy</p>
        <p className="text">Terms and Conditions</p>
      </div>
      <div className="sub-part">
        <h1 className="heading">FOOlOW US</h1>
        <div className="linked-insta">
          <FaInstagram size={30} />
          <FaLinkedin size={30} />
        </div>
        <h1 className="heading">metta muse ACCEPTS</h1>
        <div className="accept-cards">
          <div className="card">
            <FaGoogle size={17} />
            <p className="text">Pay</p>
          </div>
          <div className="card">
            <p className="text">Amex</p>
          </div>
          <div className="card">
            <FaApple size={17} />
            <p className="text">Pay</p>
          </div>
          <div className="card">
            <IoIosPhonePortrait size={17} />
            <p className="text">Pay</p>
          </div>
        </div>
      </div>
    </div>
    <p className="text1 text">Copyright 2023 mettamuse. All rights reserved.</p>
  </div>
)

export default Footer
