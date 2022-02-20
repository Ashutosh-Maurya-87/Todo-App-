import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Header />

      <Todo
        name="Ashutosh"
        age={20}
        email="ashu@gmail.com"
        phone={6387527257}
      />
      <Footer />
      {/* <ConditionalRender /> */}
    </div>
  );
}

export default App;
