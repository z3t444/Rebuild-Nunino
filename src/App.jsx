import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <>
      <div className="root max-w-[2000px] mx-auto bg-white p-8 pt-5 rounded-3xl">
        <Header></Header>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
