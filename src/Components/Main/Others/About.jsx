import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../Context/ContextAPI';

const About = () => {
  useEffect(() => {
    document.title = 'Web || About page';
  }, []);

  const { Users } = useContext(ThemeContext);

  return (
    <div>
      <div className="bg-yellow-600 text-white h-[200px] text-center">
        <div className="flex flex-col justify-center items-center py-5">
          <h3 className=" text-xl md:text-3xl font-bold">About US</h3>

          <p className="text-gray-300 my-3 w-11/12 lg:w-5/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn bg-yellow-600 text-white px-8"
              >
                Details
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li className="font-bold">User : {Users?.email}</li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 w-11/12 md:w-9/12 lg:w-8/12 mx-auto  ">
        <div className="">
          <h3 className="text-2xl md:text-4xl font-bold mb-2">
            Welcome our page
            <span className=" text-yellow-600 ml-2">{Users?.email}</span>
          </h3>

          <p className="">
            We are Gadget Heaven, a leading technology company dedicated to
            bringing you the latest tech gadgets and unique accessories. From
            smartphones to smartwatches, we offer a variety of products to make
            your life easier and smarter.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Mission
          </h3>
          <p className="text-sm text-gray-500">
            Our mission is to make advanced technology accessible to everyone.
            We aim to help our customers enjoy the highest benefits of modern
            technology.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Vision
          </h3>
          <p className="text-sm text-gray-500">
            We envision a world where technology makes life more innovative and
            creative. Gadget Heaven strives to play a key role in building that
            future.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our History
          </h3>
          <p className="text-sm text-gray-500">
            Gadget Heaven was founded in [Year]. Since then, we have been
            supporting tech enthusiasts and adapting to meet the evolving needs
            of our customers.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Core Values
          </h3>
          <ul className="text-sm text-gray-500">
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Customer Satisfaction:</span> We
              prioritize our customers above all.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Innovation:</span> Embracing new
              ideas and technology is at our core.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Quality:</span> We ensure quality
              in every product and service we provide.
            </li>
          </ul>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Team
          </h3>
          <p className="text-sm text-gray-500">
            Our team faces daily challenges and builds the future of Gadget
            Heaven. They are committed to providing the best service to each
            customer.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Social Responsibility
          </h3>
          <p className="text-sm text-gray-500">
            We believe in using technology to create a positive impact on
            society. Gadget Heaven participates in various CSR activities to
            contribute to social welfare.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Contact Us
          </h3>
          <ul className="text-sm text-gray-500">
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Address: </span>
              Rangpur, Dhaka, Bangladesh.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Email: </span>
              info@gadgetheaven.com
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Phone: </span> +880123456789
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Social Media:</span> [Facebook,
              Twitter Links]
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
