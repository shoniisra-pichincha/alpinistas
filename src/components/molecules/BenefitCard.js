import React from "react";

const BenefitCard = ({ title, subTitle, imageURL }) => (
  <div className="my-12 flex-col items-evenly w-1/3">
    <div className="w-1/2 mx-auto h-36">
      <img className="w-full h-full" src={imageURL} alt="" />
    </div>
    <div className="text-xl font-medium">{title}</div>
    <div className="text-md text-gray-500">{subTitle}</div>
  </div>
);

export default BenefitCard;
