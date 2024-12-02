import React from "react";
import ServiceData from "./ServicesData";

const ServiceTemplate = () => {
  return (
    <>
      {ServiceData.map((item) => {
        const { id, serviceIcon, serviceTitle, serviceDesc, serivceImages } =
          item;
        return (
          <div className="project__service__box__container" key={id}>
            <div className="project__service__box__header">
              <div className="project__service__box__icon">
                <span>{serviceIcon}</span>
                <h2>{serviceTitle}</h2>
              </div>
              <div className="service__desc">
                <small className="muted">{serviceDesc}</small>
              </div>
            </div>
            <div className="project__service__image__row">
              {serivceImages.map((image) => {
                const { serviceImg, imgId } = image;
                return (
                  <div className="image__container">
                    <img src={serviceImg} key={imgId} alt="brand" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceTemplate;
