import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./components/styles/globalStyles.css";

function App() {
  return (
    <div className="conteiner">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
