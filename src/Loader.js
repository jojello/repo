import React, { Component } from "react";
import Ajaxloader from "./images/ajax_loader.gif";

class Loader extends Component {
  render() {
    if (this.props.showLoader) {
      return <div className="loader" />;
    } else {
      return null;
    }
  }
}

export default Loader;
