import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "./Article";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      url: ""
    };
    this.getPopupInfo = this.getPopupInfo.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
    this.handleClickthroughURL = this.handleClickthroughURL.bind(this);
  }

  getPopupInfo(title, description, url) {
    this.setState({
      title: title,
      category: description,
      url: url
    });
  }

  handleClosePopup(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleClickthroughURL(e) {
    e.preventDefault();
  }

  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return (
      <div className="popUp">
        <a
          href="#"
          className="closePopUp"
          onClick={e => this.handleClosePopup(e)}
        >
          X
        </a>
        <div className="container" getPopupInfo={this.getPopupInfo}>
          <h2>title</h2>
          <h4>{this.props.category}</h4>
          <a href={this.props.url} className="popUpAction" target="_blank">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

Popup.PropTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  showPopup: PropTypes.bool,
  href: PropTypes.string.isRequired
};

export default Popup;
