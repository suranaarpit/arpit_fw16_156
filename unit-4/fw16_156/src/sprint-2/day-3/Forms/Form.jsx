import React, { useState } from "react";
import FData from "./Data";
const Form = () => {
  const [formdata, setFormdata] = useState({
    marry: false,
    dept: "HR",
  });
  const [empData, setempData] = useState([]);

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:3001/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      let data = await res.json();
      setempData([...empData, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{padding: "20px"}}>Employee Form</h1>

      <form style={{padding: "20px"}} onSubmit={handleSubmit}>
        <label>
          Name: 
          <input style={{marginLeft: "35px"}} type="text" name="name" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Age: 
          <input style={{marginLeft: "50px"}} type="number" name="age" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Addresss: 
          <input style={{marginLeft: "15px"}} type="text" name="address" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Department: 
          <select style={{cursor: "pointer", marginLeft: "19px"}} name="dept" onChange={handleChange} required>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="OP">Operations</option>
            <option value="S&M">Sales & Marketing</option>
          </select>
        </label>
        <br />

        <label>
          Salary: 
          <input style={{marginLeft: "35px"}} type="number" name="salary" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Married: 
          <input style={{cursor: "pointer", marginLeft:"25px"}} type="checkbox" name="marry" onChange={handleChange} />
        </label>
        <br />
        <br />
        <input style={{cursor: "pointer", marginLeft: "25px"}} type="submit" value="Submit" />
      </form>
      <FData empData={empData} setempData={setempData} />
    </>
  );
};

export default Form;
