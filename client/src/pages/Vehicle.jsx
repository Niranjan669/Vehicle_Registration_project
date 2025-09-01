import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Vehicle() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/vehicle")
      .then(res => setVehicles(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/vehicle/" + id)
      .then(() => setVehicles(vehicles.filter(v => v._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2>Vehicles</h2>
      <Link to="/add" className="btn btn-primary mb-2">Add Vehicle</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>CostID</th>
            <th>Type</th>
            <th>Date</th>
            <th>Reg No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(v => (
            <tr key={v._id}>
              <td>{v.name}</td>
              <td>{v.costid}</td>
              <td>{v.vectype}</td>
              <td>{v.date}</td>
              <td>{v.regno}</td>
              <td>
                <Link to={`/detail/${v._id}`} className="btn btn-info btn-sm me-2">View</Link>
                <Link to={`/update/${v._id}`} className="btn btn-warning btn-sm me-2">Update</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(v._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vehicle;
