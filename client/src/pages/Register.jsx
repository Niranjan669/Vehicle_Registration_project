import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", contact: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3001/users", form)
      .then(() => {
        alert("Registered Successfully!");
        navigate("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map(key => (
          <div className="mb-2" key={key}>
            <label>{key.toUpperCase()}</label>
            <input
              type={key === "email" ? "email" : "text"}
              name={key}
              value={form[key]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
