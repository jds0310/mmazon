import React, {useState} from 'react'
import './nav.css'

const Nav = () => {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () =>{
    setMenu(isOpen => !isOpen);
  }

  return (
  <>
  <div className="nav">
    <div className="left-box">
      <a href="#" className="toggle" onClick={()=>toggleMenu()}>All</a>
      <a href="#">Today's Deals</a>
      <a href="#">Customer Service</a>
      <a href="#">Registry</a>
      <a href="#">Gift Cards</a>
      <a href="#">Sell</a>
    </div>
    <div className="right-box">
      <a href="#">Shop Mother's Day Gifts</a>
    </div>
  </div>
  <div className={isOpen ? "show-menu" : "hide-menu"}>
    <ul className="gnb">
      <li><a href="#" className="active">Gaming accessories</a>
        <ul className="lnb">
          <li><a href="#">console</a></li>
          <li><a href="#">Mouse</a></li>
          <li><a href="#">wifi</a></li>
          <li><a href="#">gender</a></li>
        </ul>
      </li>
      <li><a href="#" className="active">Appstore For android</a>
        <ul className="lnb">
          <li><a href="#">All Apps and Games</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Bmazon Coins</a></li>
          <li><a href="#">Download Bmazon Appstore</a></li>
        </ul>
      </li>
      <li><a href="#" className="active">Electronices</a>
        <ul className="lnb">
          <li><a href="#">Camera &amp; Photo</a></li>
          <li><a href="#">Cell Phones &amp; Accessories</a></li>
          <li><a href="#">Home Audio</a></li>
          <li><a href="#">Office Electronics</a></li>
          <li><a href="#">Service Plans</a></li>
          <li><a href="#">Video Game</a></li>
          <li><a href="#">Video Projectors</a></li>
        </ul>
      </li>
      <li><a href="#" className="active">Computers</a>
        <ul className="lnb">
          <li><a href="#">Computer Components</a></li>
          <li><a href="#">Data Storage</a></li>
          <li><a href="#">Monitors</a></li>
          <li><a href="#">Networking Products</a></li>
          <li><a href="#">Scanners</a></li>
          <li><a href="#">Networking Products</a></li>
        </ul>
      </li>
      <li><a href="#" className="active">Tablet</a>
        <ul className="lnb">
          <li><a href="#">Tablet Accessories</a></li>
          <li><a href="#">Replacement Parts</a></li>
          <li><a href="#">External Components</a></li>
        </ul>
      </li>
      <li><a href="#" className="active">Arts &amp; Crafts</a>
        <ul className="lnb">
          <li><a href="#">Painting, Drawing</a></li>
          <li><a href="#">Beading &amp; Jewelry Making</a></li>
          <li><a href="#">Crafting</a></li>
          <li><a href="#">Fabric</a></li>
          <li><a href="#">Needlework</a></li>
          <li><a href="#">Scrapbooking</a></li>
          <li><a href="#">Organization, Storage</a></li>
        </ul>
      </li>
    </ul>
  </div>
  </>
  )
}

export default Nav