import React from "react";
import BenefitCard from "../molecules/BenefitCard";

const BenefitCardContainer = () => (
  <div className="mt-24 lg:my-2 flex flex-col lg:flex-row lg:justify-evenly lg:items-center">
    <BenefitCard
      title="1. Aprende"
      subTitle="El conocimiento siempre es una buena inversión,  puedes registrar tus certificaciones, cursos online y mucho más. "
      imageURL="aprende.svg"
    />
    <BenefitCard
      title="2. Practica"
      subTitle="Todo conocimiento teórico necesita de práctica para interiorizar el aprendizaje. "
      imageURL="practica.svg"
    />

    <BenefitCard
      title="3. Comparte"
      subTitle="Nuestra filosofía promueve compartir nuestros conocimientos, puedes impartir o asistir a cursos, talleres y conferencias."
      imageURL="comparte.svg"
    />
  </div>
);

export default BenefitCardContainer;
