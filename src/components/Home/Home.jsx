import React from "react";
import Destination from "../Destination/Destination";
const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://image.freepik.com/free-psd/best-trip-lettering-with-earth-globe-airplane-toy_23-2148212918.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Traveller</h5>
              <p>See the world moving with you.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://image.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Traveller</h5>
              <p>See the world moving with you.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://image.freepik.com/free-psd/travel-world-inspirational-lettering-quote-with-airplane-toys_23-2148212925.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Traveller</h5>
              <p>See the world moving with you.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <Destination></Destination>


      <div className="container overflow-hidden my-3">
        <h3 className="text-center my-5">What We Offer</h3>
        <div className="row gx-5">
          <div className="col-lg-3">
            <div className="text-center">
              <img
                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png"
                alt=""
              />
              <h6>Restaurants</h6>
              <p></p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-center">
              <img
                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png"
                alt=""
              />
              <h6>Sightseeing</h6>
              <p></p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-center">
              <img
                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png"
                alt=""
              />
              <h6>Shops & Boutiques</h6>
              <p></p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-center">
              <img
                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png"
                alt=""
              />
              <h6>Where to Stay</h6>
              <p></p>
            </div>
          </div>
        </div>
      </div>



      <div className="container overflow-hidden my-3">
        <h3 className="text-center my-5">OUR PACKAGES</h3>
        <div className="row gx-5">
          <div className="col-lg-4">
            <div className="text-center">
              <img className="img-fluid"
                src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-1-1024x640.jpg"
                alt=""
              />
              <h6>Berlin</h6>
              <p>Culture <br /> Relax      500$</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <img className="img-fluid"
                src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/03/package-6-1024x640.jpg"
                alt=""
              />
              <h6>Hong Kong</h6>
              <p>History <br /> Culture      400$</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <img className="img-fluid"
                src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-2-1024x640.jpg"
                alt=""
              />
              <h6>San Francisco</h6>
              <p>Sports <br /> Relax      700$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
