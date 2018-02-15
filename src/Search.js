import React, { Component } from "react";
import searchImg from "./images/search.png";
import classnames from "classnames/bind";
import App from "./css/App.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false
    };

    this.addActiveClass = this.addActiveClass.bind(this);
  }

  addActiveClass() {
    const currentState = this.state.searchActive;
    this.setState({
      searchActive: !currentState
    });
  }

  render() {
    return (
      <header>
        <section className="container">
          <section id="search">
            <div className={this.state.searchActive ? "activeclass" : null}>
              <input type="text" name="name" />
            </div>
            <a href="#" onClick={this.addActiveClass}>
              <img src={searchImg} alt="" />
            </a>
          </section>
          <div className="clearfix" />
        </section>
      </header>
    );
  }
}

export default Search;
