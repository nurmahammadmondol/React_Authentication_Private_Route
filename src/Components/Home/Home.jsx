import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../Context/ContextAPI';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'Web || Home page';
  }, []);

  const parson = useContext(ThemeContext);

  console.log(parson);
  return (
    <div
      className="hero h-[500px] w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-16 rounded-xl"
      style={{
        backgroundImage:
          'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/Login">
            <button className="btn bg-yellow-600 text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
