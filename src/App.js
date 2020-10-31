import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from './component/Counter'

const App = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [term, setTerm] = useState(false);

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    term: false,
  });

  const handleChange = (e) => {
    const { target } = e;

    const { name } = target;

    const value = name === "term" ? target.checked : target.value;

    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  //console.log("render : ",email,password,term);

  const onSubmit = (e) => {
    e.preventDefault();

    // const payload = {
    //   email,
    //   password,
    //   term
    // }

    // fetch('api/auth/login',{
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(payload)
    // })

    console.log("submit payload", inputFields);

  };
  
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                name="term"
                className="form-check-input"
                id="exampleCheck1"
                onChange={handleChange}
              />
              <label className="form-check-label" for="exampleCheck1">
                Accept Terms & Condition
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
