import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";

class DefaultImg extends Component {
  render() {
    return (
      <div>
        <ReactImageFallback
          src={this.props.urlImage}
          fallbackImage="my-backup.png"
        />
      </div>
    );
  }
}

export default DefaultImg;
