import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none">
        <h2 className="font-semibold text-3xl py-5 text-center">
          Register your account
        </h2>
        <div className="divider"></div>
        <form className="card-body pt-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="Name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center pb-5">
          Already Have An Account ?{" "}
          <Link className="text-red-500" to={"/auth/Login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;