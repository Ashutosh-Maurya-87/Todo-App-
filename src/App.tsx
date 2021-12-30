import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile
        name="Ashutosh"
        age={20}
        email="ashu@gmail.com"
        phone={6387527257}
      />
    </div>
  );
}

export default App;
