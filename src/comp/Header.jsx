import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header"> 
    {/* left */}
          <div className="left-box">
              <img src="images/logo.gif" alt="logo" />
              <div className="text-box1">
                  <img src="images/map.png" alt="maps" />
                  <div className="text-box1-subbox">
                      <span>Deliver to</span>
                      <span>Republic of Korea</span>
                  </div>
              </div>
          </div>    


    {/* middle */}
          <div className="middle-box">
              <span className="text-list">
                  <span>All</span>
                  <span class="material-icons">arrow_drop_down</span>
              </span>
              <input type="text" className="search-bar" />
              <span className="text-search material-icons">search</span>
          </div>

    {/* right */}
          <div className="right-box">
              <img src="images/cont.png" alt="cont" className="cont"/>
              <div className="text-box2">
                  <span>Hello, Sign in</span>
                  <span>Account.Lists</span>
              </div>
              <div className="text-box3">
                  <span>Returns</span>
                  <span>Orders</span>
              </div>
              <img src="images/cart.png" alt="cart" className="cart" />

          </div>
      </div>
    )
  }
}
