import React from "react";
import DetailFeature from "../../molecules/DetailFeature";

const Details = () => (
  <div className="my-16">
    <div className="w-full container mx-auto px-4">
      <DetailFeature />
      <DetailFeature right />
      <DetailFeature />
    </div>
  </div>
);

export default Details;
