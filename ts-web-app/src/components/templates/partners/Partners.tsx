import React, { Fragment, useEffect, useState } from "react";
import Image from "../../atoms/Image";
import Content from "../../molecules/Content";
import "../../templates/partners/Partners.css";
import PartnersButton from "../../molecules/PartnersButton/PartnersButton";
import { IPartner } from "../../models/IPartner";
import * as partnerService from '../../services/PartnerServices';

function Partners(props: any): JSX.Element {
  const [partners, setPartners] = useState<IPartner[]>([]);

  const loadPartners = async () => {
    const res = await partnerService.getPartners()
    console.log(res.data);
    setPartners(res.data);
  };

  useEffect(() => {
    loadPartners();
  }, []);

  return (
    <Fragment>
      {partners.map((partner) => {
        return (
          <div className="card bg-secondary mb-3 data-partners" key={partner.id}>
            <div className="card-header">{partner.nickname}</div>
            <div className="card-body">
              <div className="card-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png" alt="image error" />
                <Content title="" text={partner.description} />
              </div>
              <a className="btn btn-success" href={partner.urlPage}>
                Info
              </a>
            </div>
          </div>
        );
      })}

      <div>
        <PartnersButton />
      </div>
    </Fragment>
  );
}

export default Partners;
