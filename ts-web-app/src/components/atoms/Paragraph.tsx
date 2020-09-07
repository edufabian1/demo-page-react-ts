import React from 'react';
import PropTypes  from 'prop-types';

function Paragraph(props: any): JSX.Element{
    return(
    <p className="mb-0">{props.text}</p>
    );
}

Paragraph.propTypes = {
    text: PropTypes.string.isRequired
  };

  export default Paragraph;