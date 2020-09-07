import React from 'react';
import PropTypes  from 'prop-types';

import Content from '../molecules/Content';
import Image from '../atoms/Image';

function Article(props: any): JSX.Element {
    return(
        <div>
            <Image src={props.img.src} alt={props.img.alt} />
            <Content title={props.title} text={props.text} />
        </div>
    );
  }
  
  Article.propTypes = {
    text: PropTypes.string.isRequired
  };
  
  export default Article;