import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="px-4 pt-5 pb-2 bg-dark text-white">
        <div className="row gx-5">
          <div className="col-lg-5">
            <div className="bg-dark text-white">
              <h3>Traveller</h3>
            </div>
            <div className="my-2">
              <p>
                <small> Level-10, Hossain villa, Kuril, Dhaka</small>
              </p>
              <p>
                <small> Official: 21hujaifa@gmail.com</small>
              </p>
              <p>
                <small> Helpline: 01791158039 (7 am t0 10 pm)</small>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <ul className="p-0 bg-dark text-center">
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/home">
                    Home
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/about">
                    About
                  </Link>
                </li>
                <li className="list-group-item bg-dark  p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <img
                src="https://onlineshoppingbd.org/wp-content/uploads/2016/12/payment.png"
                alt=""
              />
            </div>
          </div>
        </div>
      <p className="text-white text-center mt-3">Copyright © 2021 Traveller</p>
      </div>
    </div>
  );
};

export default Footer;
