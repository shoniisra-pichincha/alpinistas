import React from "react";
import BenefitCardContainer from "../../organisms/BenefitCardContainer";
// import TestimonialDetails from "../../organisms/TestimonialDetails";

const Problems = () => (
  <div className="bg-custom-blue w-full py-16 text-center">
    <div className="w-full container px-8 mx-auto">
      <div className="font-semibold text-2xl my-4">
        ¿Qué es la Ruta de los volcanes?
      </div>
      <div className="text-gray-600 text-lg">
        Es la nueva platafarma de aprendizaje autodidacta impulsada por el Banco
        Pichincha para motivar el desarrollo personal y profesional de sus
        colaboradores
      </div>

      <BenefitCardContainer />
      {/* <TestimonialDetails
        personName="Customer Name, CEO of Company Name"
        personImageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/avatar/avatar-1.png"
        content="Powerfull and relevant testimonial of Customer X. This content should
      focus on the result the product had for this customer or answer a doubt
      your potential customer could have."
      /> */}
    </div>
  </div>
);

export default Problems;
