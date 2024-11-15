import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const handleSubmit= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none">
        <h2 className="font-semibold text-3xl py-5 text-center">Login your account</h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit} className="card-body pt-0">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="font-semibold text-center pb-5">Dont’t Have An Account ? <Link className="text-red-500" to={'/auth/register'}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
