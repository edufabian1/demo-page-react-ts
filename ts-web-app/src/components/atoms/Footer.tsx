import React from 'react';
import PropTypes  from 'prop-types';

function Footer(props: any): JSX.Element{
    return(
    <footer className="blockquote-footer">{props.NameFooter} - {props.DateFooter}</footer>
    );
}

Footer.propTypes = {
    NameFooter: PropTypes.string.isRequired,
    DateFooter: PropTypes.string.isRequired
  };

  export default Footer;