import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Context/ContextAPI';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  useEffect(() => {
    document.title = 'Web || Login Page';
  }, []);

  const navigate = useNavigate();

  const { SignIn, Users } = useContext(ThemeContext);

  const [Error, setError] = useState('');

  const SignInID = e => {
    e.preventDefault();

    const Email = e.target.email.value;
    const Password = e.target.password.value;

    // console.log(Email, Password);

    setError('');

    SignIn(Email, Password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        toast.success('Your account login successfully');
        navigate('/');
      })

      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={SignInID} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              type="password"
              name="password"
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
            {/* {Users && <Navigate to="/"></Navigate>} */}
            <button className="btn bg-yellow-600 text-white">Login</button>
          </div>

          <div>{Error && <p className="text-red-600">{Error}</p>}</div>

          <div>
            <p className="text-xs text-end">
              Don't have an account?
              <span className="text-yellow-600">
                <Link to="/Registration"> Registration</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
