import React, { Fragment } from "react";
import Content from "../molecules/Content";
import "../templates/About.css";

function About(props: any): JSX.Element {
  return (
    <Fragment>
      <div className="data-about">
        <Content
          title="QUIENES SOMOS"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reprehenderit sapiente similique nostrum. Blanditiis, hic, exercitationem corrupti fugiat, eligendi obcaecati nam eius non ducimus ullam ex soluta. Aperiam, quaerat officiis."
        />
      </div>

      <div className="data-about">
        <Content
          title="MISION"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reprehenderit sapiente similique nostrum. Blanditiis, hic, exercitationem corrupti fugiat, eligendi obcaecati nam eius non ducimus ullam ex soluta. Aperiam, quaerat officiis.."
        />
      </div>

      <div className="data-about">
        <Content
          title="VISION"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reprehenderit sapiente similique nostrum. Blanditiis, hic, exercitationem corrupti fugiat, eligendi obcaecati nam eius non ducimus ullam ex soluta. Aperiam, quaerat officiis."
        />
      </div>
    </Fragment>
  );
}

export default About;
