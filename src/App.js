import React from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {

    const [Title, setTitle] = React.useState("Главная страница");

    function changeTitle(newTitle) {
        setTitle(newTitle);
    }

  return (
      <div className="App">
          <Header title={Title} login={false}/>
          {/*<BodyExample changeTitle={changeTitle}/>*/}
          <Body changeTitle={changeTitle}/>
          <Footer/>
      </div>
  );
}

export default App;
