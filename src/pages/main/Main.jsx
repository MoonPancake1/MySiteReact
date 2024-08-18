import React from "react";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Main/Body";
import Footer from "../../components/Footer/Footer";


function Main() {

  return (
      <div className="App">
          <Header title={"Главная страница"}/>
          <Body />
          <Footer />
      </div>
  );
}

export default Main;
