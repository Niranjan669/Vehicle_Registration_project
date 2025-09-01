import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", costid: "", vectype: "", date: "", regno: "" });

  useEffect(() => {
    axios.get("http://localhost:3001/vehicle/" + id)
      .then(res => setForm(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.put("http://localhost:3001/vehicle/" + id, form)
      .then(() => navigate("/vehicle"))
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2>Update Vehicle</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map(key => (
          key !== "_id" &&
          <div className="mb-2" key={key}>
            <label className="form-label">{key.toUpperCase()}</label>
            <input
              type="text"
              name={key}
              value={form[key]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
}

export default Update;
