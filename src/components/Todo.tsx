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
  // item: any;
};

function Todo(props: profileProps) {
  const [item, setItem] = useState("banana");
  const handleSubmit = () => {
    console.log("enter btn press");
  };

  const inputHandler = (e: any) => {
    setItem("apple");
    console.log("event value", e.target.value);
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

export default Todo;
