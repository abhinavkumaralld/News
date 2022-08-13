import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsNavbar
 extends Component {
  render() {
    return (
      <div className="m-8">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item" >
                        <Link  className="nav-link"  style={{color:"white"}} to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" style={{color:"white"}} to="/business">Business</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" style={{color:"white"}} to="/entertainment">Entertainment</Link>
                      </li>
                      
                      <li className="nav-item">
                        <Link className="nav-link" style={{color:"white"}} to="/health">Health</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" style={{color:"white"}} to="/science">Science</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" style={{color:"white"}} to="/sports">Sports</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" style={{color:"white"}} to="/technology">Technology</Link>
                      </li>
                    </ul>
                    
                  </div>
                </div>
           </nav>
      </div>
    )
  }
}
