import React from "react";
import CustomButton from "../../atoms/CustomButton";

const Hero = () => (
  <>
    <div className="bg-hero bg-bottom bg-local bg-no-repeat bg-cover h-screen">
      <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-normal mt-32 mb-6 max-w-4xl mx-auto lg:mb-16 text-center pt-8">
        Bienvenid@ a la ruta de los volcanes
      </div>
      <div className="text-xl lg:text-2xl leading-tight text-gray-600 text-center">
        Tu camino de crecimiento personal y profesional empieza Aquí
      </div>
      <CustomButton
        classes="mt-8 mb-2"
        color="bg-yellow-400 border-yellow-600"
        big
        title="Conocer Más"
      />
      <div className="text-sm text-gray-600 text-center ">
        Si ya tienes una cuenta inicia sesión
      </div>

    </div>
  </>
);

export default Hero;
