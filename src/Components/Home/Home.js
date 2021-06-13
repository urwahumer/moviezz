import React, { useEffect, useState } from "react";
import Upcoming from "./Upcoming";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Upcoming />
    </>
  );
};

export default Home;
