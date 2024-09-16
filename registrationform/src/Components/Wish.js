import React from "react";

export default function Wish(props) {
  return (
    <div className="container card p-3 mt-2 register-container text-center">
      <h3>Name : {props.name}</h3>
      <h3>Thank You for Joining us</h3>
      <h3>Verification code sent on mail : {props.email}</h3>
    </div>
  );
}
