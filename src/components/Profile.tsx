import React, { useState } from "react";

// we can define this type to pass props data
// interface profileProps {
//   name: string;
//   age: number;
//   email: string;
//   phone: number;
// }

// we can define this type to pass props data
type profileProps = {
  name: string;
  age: number;
  email: string;
  phone: number;
};

function Profile(props: profileProps) {
  const [item, setItem] = useState("Banana");
  const handleSubmit = (e: any) => {
    setItem("Apple");
    console.log("enter btn press");
    console.log("event value", e.target.value);
  };

  const inputHandler = (e: any) => {
    console.log("event calll", e.target.value);
  };

  return (
    <>
      <div>
        <input
          type={"text"}
          placeholder="input item name"
          onChange={inputHandler}
        />
        <button onClick={handleSubmit}>Enter</button>
      </div>
      <div>
        <ul>
          <li>{item}</li>
        </ul>
      </div>
      {/* <div>
        <h2>Hi, welcome to first typescript react app</h2>
        <h2>First Name: {props.name}</h2>
        <h2>Age : {props.age}</h2>
        <h2>E mail: {props.email}</h2>
      </div> */}
    </>
  );
}

export default Profile;
