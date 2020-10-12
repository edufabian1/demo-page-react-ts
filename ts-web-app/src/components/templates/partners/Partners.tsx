import React, { Fragment } from "react";
import Image from "../../atoms/Image";
import Content from "../../molecules/Content";
import "../../templates/partners/Partners.css";

function Partners(props: any): JSX.Element {
  return (
    <Fragment>
      <div className="card bg-secondary mb-3 data-partners">
        <div className="card-header">COCA-COLA</div>
        <div className="card-body">
          <div className="card-text">
            <Image
              src="https://www.zma.la/wp-content/uploads/2016/08/coca-cola-logo-1.jpg"
              alt="nothing"
            />
            <Content title="" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero beatae facere in officiis voluptatem quo, officia omnis non vitae aspernatur odio. Nesciunt fugiat nobis minima. Vitae, iure. Alias, ipsa!" />
          </div>          
          <a className="btn btn-success" href="https://www.cocacoladeargentina.com.ar">Info</a>
        </div>
      </div>
    </Fragment>
  );
}

export default Partners;
