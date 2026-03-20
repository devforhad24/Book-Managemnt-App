import React, { useEffect, useState } from "react";
import { useBooks } from "../context/BookContext";
import Hero from "../components/Hero";
import Shop from "./shop/Shop";

const Home = () => {

  return <div>
    <Hero/>
    <Shop/>

  </div>;
};

export default Home;
