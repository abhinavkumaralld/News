import "./App.css";
import React, { Component } from 'react'
import NewsNavbar from "./newscomponents/navbarr";
import News from "./newscomponents/news";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NewsNavbar/>
          <Routes>
            <Route exact path="/"  element={<News key="1" category="general" />} />
            <Route exact path="/business"  element={<News key="2" category="business" />} />
            <Route exact path="/entertainment"  element={<News key="3" category="entertainment" />} />
            <Route exact path="/health"  element={<News key="4" category="health" />} />
            <Route exact path="/science"  element={<News key="5" category="science" />} />
            <Route exact path="/sports"  element={<News key="6" category="sports" />} />
            <Route exact path="/technology"  element={<News key="7" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
