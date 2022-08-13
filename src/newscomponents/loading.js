import React, { Component } from 'react'
import giphy from "./giphy.gif"
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'> 
      <img src={giphy} alt="loading" style={{width:"100px",height:"100px"}} className="rounded m-auto d-block"/>
      </div>
    )
  }
}
