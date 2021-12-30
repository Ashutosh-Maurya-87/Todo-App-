import React from "react";

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
  return (
    <div>
      <h2>Hi, welcome to first typescript react app</h2>
      <h2>First Name: {props.name}</h2>
      <h2>Age : {props.age}</h2>
      <h2>E mail: {props.email}</h2>
    </div>
  );
}

export default Profile;
