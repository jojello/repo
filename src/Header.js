import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mashFilter: [],
      techFilter: []
    };

    this.handleFeedrClick = this.handleFeedrClick.bind(this);
    this.handleMashClick = this.handleMashClick.bind(this);
    this.handleTechClick = this.handleTechClick.bind(this);
    this.handleBitClick = this.handleBitClick.bind(this);
  }

  handleFeedrClick(e) {
    this.setState({
      showAllArticles: true
    });
  }

  handleMashClick(e) {
    e.preventDefault();
    this.setState({
      mashFilter: true
    });
  }

  handleTechClick(e) {
    e.preventDefault();
    this.setState({
      techFilter: true
    });
  }

  handleBitClick(e) {
    e.preventDefault();
    this.setState({
      abcFilter: true
    });
  }

  render() {
    return (
      // let mashArray = this.state.mashArticles;
      // if (this.state.mashFilter){
      //   mashArray = this.state.mashArticles.filter((source) => )
      // }
      <header>
        <section className="container">
          <a href="#" onClick={this.handleFeedrClick}>
            <h1>Feedr</h1>
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">
                  News Source: <span>Choose Your News</span>
                </a>
                <ul>
                  <li>
                    <a href="#" onClick={this.handleMashClick}>
                      Mashable
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={this.handleTechClick}>
                      TechCrunch
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={this.handleBitClick}>
                      Bitcoin
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="clearfix" />
        </section>
      </header>
    );
  }
}

export default Header;
