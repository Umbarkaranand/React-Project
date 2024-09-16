import React from "react";
import Styled from "styled-components";

export default function Register(props) {
  let btnstyle;
  btnstyle = {
    backgroundColor: "green",
    color: "white",
  };

  let btntext, passtype;

  if (props.showPass) {
    btnstyle.backgroundColor = "red";
    btntext = "Hide Password";
    passtype = "text";
  } else {
    btntext = "Show Password";
    passtype = "password";
  }

  const StyledButton = Styled.button`
  display: block;
  padding:3px;
  background-color: orange;
  border: 1px solid black;
  width:100%;
  margin:5px;
`;

  const StyledRegisterContainer = Styled.div`
  width:600px;

  &:hover{
    box-shadow:0px 0px 5px gray;
  }

  
`;
  return (
    <StyledRegisterContainer className="container card p-3 mt-2">
      <h1 className="text-center">Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className="form-group mt-2">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input
            type={passtype}
            id="password"
            name="password"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Register
        </button>
        <button
          type="button"
          className="btn"
          onClick={props.click}
          style={btnstyle}
        >
          {btntext}
        </button>
        <StyledButton type="button">Login</StyledButton>
      </form>
    </StyledRegisterContainer>
  );
}
