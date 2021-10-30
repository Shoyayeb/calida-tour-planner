import React from "react";
import About from "../About/About";
import Banner from "./../Banner/Banner";
import Services from "./../Services/Services";

const Home = () => {
  // COLOR THEME:
  // base: white
  // other: #FAF620 OR #FFB606 OR #ffb606, #FF1F18, #12E344
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
    </div>
  );
};

export default Home;
