import React from "react";
import Slider from "../../components/Slider/Slider";
import Featured from "../../components/Featured/Featured";
import Catagories from "../../components/Catagories/Catagories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Featured type='featured' />
      <Catagories />
      <Featured type='trending' />
      <Contact />
    </div>
  );
};

export default Home;
