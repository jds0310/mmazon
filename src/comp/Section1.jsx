import React, { useState } from 'react'
import './section1.css'
import data from '../data/productData'    

export const Section1 = () => {
  return (
    <div className="section">
        {/* top */}
          <div className="contents">
              {/* box1 */}
              <div className="contents-box">
                  <div className="text-box">
                      <h3>Gaming accessories</h3>
                  </div>
                  <div className="img-box">
                      <div className="img-box-top">
                          <div className="img-box-sub">
                              <img src="images/game1.jpg" alt="product" />
                              <p>console</p>
                          </div>
                          <div className="img-box-sub">
                              <img src="images/game2.jpg" alt="product" />
                              <p>wifi</p>
                          </div>
                      </div>
                      <div className="img-box-bottom">
                          <div className="img-box-sub">
                              <img src="images/game3.jpg" alt="product" />
                              <p>computer</p>
                          </div>
                          <div className="img-box-sub">
                              <img src="images/game4.jpg" alt="product" />
                              <p>gender</p>
                          </div>
                      </div>
                  </div>
                  <div className="link-box">
                      <a href="#">See more</a>
                  </div>
              </div>
              {/* box2 */}
              <div className="contents-box">
                  <div className="text-box">
                      <h3>Shop by Category</h3>
                  </div>
                  <div className="img-box">
                      <div className="img-box-top">
                          <div className="img-box-sub">
                              <img src="images/shop1.jpg" alt="product" />
                              <p>console</p>
                          </div>
                          <div className="img-box-sub">
                              <img src="images/shop2.jpg" alt="product" />
                              <p>gender</p>
                          </div>
                      </div>
                      <div className="img-box-bottom">
                          <div className="img-box-sub">
                              <img src="images/shop3.jpg" alt="product" />
                              <p>power line</p>
                          </div>
                          <div className="img-box-sub">
                              <img src="images/shop4.jpg" alt="product" />
                              <p>notebook</p>
                          </div>
                      </div>
                  </div>
                  <div className="link-box">
                      <a href="#">shop now</a>
                  </div>
              </div>
             {/* box3 */}
              <div className="contents-box">
                  <div className="text-box">
                      <h3>Health &amp; Personal Care</h3>
                  </div>
                  <div className="img-box-big">
                     <img src="images/health.jpg" alt="product" className="big-img" />
                  </div>
                  <div className="link-box">
                      <a href="#">shop now</a>
                  </div>
              </div>
             {/* box4 */}
              <div className="contents-box2">
                  <div className="text-box2">
                      <h3>Sign in for the best experience</h3>
                      <button type="button">Sign in securely</button>
                  </div>
                  <div className="img-box">
                      <img src="images/ship.jpg" alt="productship" />
                  </div>
              </div>
          </div>
          {/* bottom */}
          <div className="contents">
              {/* box5 */}
              <div className="contents-box">
                  <div className="text-box">
                      <h3>Shop Mother's Day Gifts</h3>
                  </div>
                  <div className="img-box-big">
                     <img src="images/bottom-box1.jpg" alt="product" className="big-img" />
                  </div>
                  <div className="link-box">
                      <a href="#">shop now</a>
                  </div>
              </div>
              {/* box6 */}
              <div className="contents-box">
                  <div className="text-box">
                      <h3>Computers &amp; Accessories</h3>
                  </div>
                  <div className="img-box-big">
                     <img src="images/bottom-box2.jpg" alt="product" className="big-img" />
                  </div>
                  <div className="link-box">
                      <a href="#">shop now</a>
                  </div>
              </div>
              {/* box7 */}
              <div className="contents-box">
                  <div className="text-box">
                      <h3>Deal of the Day</h3>
                  </div>
                  <div className="img-box-big">
                     <img src="images/bottom-box3.jpg" alt="product" className="big-img" />
                  </div>
                  <div className="link-box">
                      <a href="#">See all deals</a>
                  </div>
              </div>
              {/* box8 */}
              <div className="contents-box">
                  <div className="text-box">
                      <h3>Electronics</h3>
                  </div>
                  <div className="img-box-big">
                     <img src="images/bottom-box4.jpg" alt="product" className="big-img" />
                  </div>
                  <div className="link-box">
                      <a href="#">see more</a>
                  </div>
              </div>
          </div>
          {/* /bottom */}
      </div>
  )
}

export default Section1