import React from "react";
import PropTypes from "prop-types";

function Image(props: any): JSX.Element {
  return <img src={props.src} alt={props.alt} height="150" width="250"></img>;
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  };

export default Image;