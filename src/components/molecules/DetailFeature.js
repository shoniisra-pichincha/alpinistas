import React from "react";
import ListItem from "../atoms/ListItem";

const DetailFeature = ({ right }) => (
  <div
    className={`flex flex-col gap-8 items-center my-12 md:flex-row md:justify-between md:items-stretch md:my-10 ${
      right ? "md:flex-row-reverse" : "flex-col"
    }`}
  >
    <div>
      <img
        className="mx-auto"
        src="https://www.landingkit.com/templates/saasfolio/tailwind/img/features-drawing-moonlanding.png"
        alt=""
      />
    </div>
    <div className="w-4/5">
      <div className="text-2xl lg:text-3xl font-medium">
        Now go deeper into what your product offers. But, word it as benefits,
        not as features.
      </div>
      <div className="text-md lg:text-lg text-gray-600 py-4">
        “Save your favorites links” is a feature. “Never lose your favorite
        websites again” is a benefit. Users don’t care about your product, they
        only care about what’s in it for them.
      </div>
      <ListItem title="Summarize the content above" />
      <ListItem title="For visitors that don't like to read" />
      <ListItem title="And just scan the page" />
    </div>
  </div>
);

export default DetailFeature;
