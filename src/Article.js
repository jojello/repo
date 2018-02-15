import React, { Component } from "react";
import PropTypes from "prop-types";
import ajaxloader from "./images/ajax_loader.gif";

class Article extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onPopup(this.props.title, this.props.category, this.props.url);
  }

  render() {
    return (
      <article className="article">
        <section className="featuredImage">
          <img src={this.props.urlImage} alt="" />
        </section>
        <section className="articleContent">
          <a onClick={this.handleClick}>
            <h3>{this.props.title}</h3>
          </a>
          <h6>{this.props.category}</h6>
        </section>
        <section className="impressions">{this.props.score}</section>
        <div className="clearfix" />
      </article>
    );
  }
}

Article.PropTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  impressions: PropTypes.number,
  urlImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
export default Article;
