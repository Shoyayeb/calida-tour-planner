import React from "react";
import Services from "../Services/Services";
import Banner from "./../Banner/Banner";

const Home = () => {
  // COLOR THEME:
  // base: white
  // other: #FAF620 OR #FFB606 OR #ffb606, #FF1F18, #12E344
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
