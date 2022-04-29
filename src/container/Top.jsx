import React, { Component } from 'react'
import './top.css'
import Header from '../comp/Header'
import Nav from '../comp/Nav'



export default class Top extends Component {
  render() {
    return (
      <div className="top">
          <Header />
          <Nav />
      </div>
    )
  }
}
