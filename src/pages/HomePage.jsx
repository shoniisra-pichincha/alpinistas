import React from 'react'

import Hero from '../components/slices/HomePage/Hero'
import Problems from '../components/slices/HomePage/Problems'
import Details from '../components/slices/HomePage/Details'
// import CTA from "./components/sections/CTA";
// import Footer from "./components/sections/Footer";
// import Pricing from "./components/sections/Pricing";
// import ProductBenefits from "./components/sections/ProductBenefits";
// import SolutionProblem from "./components/sections/SolutionProblem";
// import Testimonials from "./components/sections/Testimonials";
import Layout from '../components/templates/Layout'

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Problems />
      <Details />
      {/*   
      <CTA />
      <Testimonials />
      <ProductBenefits />
      <Pricing />
      <SolutionProblem />
      <Footer /> 
      */}
    </Layout>
  )
}

export default HomePage
