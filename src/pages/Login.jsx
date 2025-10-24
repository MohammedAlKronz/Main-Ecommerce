import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <form className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
          <label for="display-4">Email address</label>
          <input
            type="email"
            className="form-control mt-1 mb-3"
            placeholder="name@example.com"
          />
          <label for="floatingPassword display-4">Password</label>
          <input
            type="password"
            className="form-control mt-1 mb-3"
            id="floatingPassword"
            placeholder="Password"
          />
          <div className="my-3">
            <p>
              New Here?{" "}
              <Link
                to="/register"
                className="text-decoration-underline text-info"
              >
                Register
              </Link>{" "}
            </p>
          </div>
          <button type="submit" className="btn btn-dark w-100" disabled>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
