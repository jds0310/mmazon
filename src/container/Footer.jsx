import React, { Component } from 'react'
import './footer.css'
import Section4 from '../comp/Section4'
import Section5 from '../comp/Section5'
import Section6 from '../comp/Section6'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <Section4 />
          <Section5 />
          <Section6 />
      </div>
    )
  }
}
