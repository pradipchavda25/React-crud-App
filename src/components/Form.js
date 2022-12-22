import React, { useEffect, useState } from "react";
import _ from "lodash";

export default function UserData({ defaultValue, onSubmit }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const { fname, lname, email } = defaultValue || {};
    setFname(fname);
    setLname(lname);
    setEmail(email);
  }, [defaultValue]);

  const changeFname = (event) => {
    setFname(event.target.value);
  };

  const changeLname = (event) => {
    setLname(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const AddData = (event) => {
    event.preventDefault();
    const val = {
      fname,
      lname,
      email,
    };
    onSubmit(val);
    clearState();
  };

  const clearState = () => {
    setFname("");
    setLname("");
    setEmail("");
  };

  return (
    <>
      <div className="form">
        <label>FirstName</label> &nbsp;
        <input
          type="text"
          value={fname}
          onChange={changeFname}
          placeholder="Enter Your FirstName"
          id="fname"
          name="fname"
          required
        />
        &nbsp; &nbsp;
        <label>LastName</label> &nbsp;
        <input
          type="text"
          value={lname}
          onChange={changeLname}
          placeholder="Enter Your LastName"
          id="lname"
          name="lname"
          required
        />
        &nbsp; &nbsp;
        <label>Email</label> &nbsp;
        <input
          type="email"
          value={email}
          onChange={changeEmail}
          placeholder="Enter Your Valid Email"
          id="email"
          name="email"
          required
        />
      </div>
      <br />
      <div className="btn">
        <button onClick={AddData} className="btn" id="toggle">
          {_.isEmpty(defaultValue) ? "Insert" : "Update"}
        </button>
      </div>
      <br />
    </>
  );
}
