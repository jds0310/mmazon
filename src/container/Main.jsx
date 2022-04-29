import React, { Component } from 'react'
import './main.css'
import Slider from '../comp/Slider'
import Section1 from '../comp/Section1'
import Section2 from '../comp/Section2'
import Section3 from '../comp/Section3'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
          <Slider />
          <Section1 />
          <Section2 />
          <Section3 />
      </div>
    )
  }
}
