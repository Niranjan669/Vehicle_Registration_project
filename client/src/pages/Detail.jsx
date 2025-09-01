import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/vehicle/" + id)
      .then(res => setVehicle(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!vehicle) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Vehicle Details</h2>
      <ul className="list-group">
        <li className="list-group-item"><b>Name:</b> {vehicle.name}</li>
        <li className="list-group-item"><b>CostID:</b> {vehicle.costid}</li>
        <li className="list-group-item"><b>Type:</b> {vehicle.vectype}</li>
        <li className="list-group-item"><b>Date:</b> {vehicle.date}</li>
        <li className="list-group-item"><b>Reg No:</b> {vehicle.regno}</li>
      </ul>
    </div>
  );
}

export default Detail;
