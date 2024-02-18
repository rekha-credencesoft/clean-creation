import React from "react";
import DateDay from "../components/CurrentMenu/DateDay";
import FullMenu from "../components/CurrentMenu/FullMenu";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import axios from "axios";

const CurrentMenuScreen = ({response}) => {
  return (
    <div>
      <NavBar />
      <DateDay />
      <FullMenu />
      <Footer />
    </div>
  );
};



export default CurrentMenuScreen;
