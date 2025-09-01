import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">VehicleApp</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Vehicle</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view">View Vehicles</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
