import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <form className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control mt-1 mb-3"
            id="name"
            placeholder="Enter Your Name"
          />

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control mt-1 mb-3"
            id="email"
            placeholder="name@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control mt-1 mb-3"
            id="password"
            placeholder="Password"
          />

          <div className="my-3">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-underline text-info">
                Login
              </Link>
            </p>
          </div>

          <button type="submit" className="btn btn-dark w-100" disabled>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
