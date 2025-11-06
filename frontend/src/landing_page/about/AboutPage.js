import React from "react";

import Hero from "./Hero";
import Team from "./Team";

function AboutPage(){
  return(
    <h1>Hello, This is About page</h1>
  );
}

function PricingPage() {
  return (
    <>
      <Hero />
      <Team />
    </>
  );
}

export default PricingPage;
