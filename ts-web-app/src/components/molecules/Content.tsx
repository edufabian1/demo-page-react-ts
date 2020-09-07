import React from "react";
import PropTypes from "prop-types";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";

function Content(props: any): JSX.Element {
  return (
    <div>
      <Title text={props.title} />
      <Paragraph text={props.text} />
    </div>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Content;
