import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Context/ContextAPI';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registration = () => {
  useEffect(() => {
    document.title = 'Web || Registration Page';
  }, []);

  const navigate = useNavigate();

  const { CreatedUser } = useContext(ThemeContext);
  const [Error, setError] = useState('');

  const handleRegistrationSubmit = e => {
    e.preventDefault();
    // const Name = e.target.displayName.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    // const CheckBox = e.target.checkBox.checked;

    setError('');

    // console.log(Name, Email, Password, CheckBox);
    CreatedUser(Email, Password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        toast.success('Your registration successfully');
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegistrationSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="displayName"
              className="input input-bordered"
              // required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="@email.com"
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
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="confirm password"
              className="input input-bordered"
              // required
            />
          </div>

          <div className="form-control">
            <label className="cursor-pointer justify-start  label">
              <input
                type="checkbox"
                name="checkBox"
                className="checkbox checkbox-warning"
              />
              <span className="label-text ml-2">
                Accept our all terms and conditions
              </span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-yellow-600 text-white">
              Registration
            </button>
          </div>

          <div>{Error && <p className="text-red-600">{Error}</p>}</div>
          <div>
            <p className="text-xs text-end">
              Have an account already?
              <span className="text-yellow-600">
                <Link to="/Login"> Log in</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
