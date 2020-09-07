import React from "react";
import PropTypes from "prop-types";

function Title(props: any): JSX.Element {
  return <h1>{props.text}</h1>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
