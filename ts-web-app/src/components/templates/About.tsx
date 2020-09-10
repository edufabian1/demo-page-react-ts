import React, { Fragment } from "react";
import Content from "../molecules/Content";

function About(props: any): JSX.Element {
  return (
    <Fragment>
      <Content title="QUIENES SOMOS" text="[ClientName] es hacer posible lo imposible. Es el club que siempre se supera, el que persigue el mejor juego. 
        El club de los talentos latinoamericanos por descubrir. [ClientName] es el club que mejor representa a los millones de fans
        que aman los esports con corazón amateur y a los que sueñan con formar parte del mundo profesional." />
      <Content
        title="MISION"
        text="Ser el club de deportes electrónicos en el que todos los latinoamericanos sueñan jugar."
      />
      <Content
        title="VISION"
        text="Ocupar la posición de liderazgo, tanto en equipo como en reconocimiento de marca, en Latinoamérica a través del desarrollo de diferentes juegos,
        ofreciendo un conjunto de servicios ligados a la industria: academias, espacios de juego y eventos."
      />
    </Fragment>
  );
}

export default About;
