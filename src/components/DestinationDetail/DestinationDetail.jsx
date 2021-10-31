import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../allHooks/useFirebase";

const DestinationDetail = () => {
  const { _id } = useParams();
  const { user } = useFirebase();
  const [isUpdate, setIsUpdated] = useState(null);

  const [destinations, setDestinations] = useState({});
  useEffect(() => {
    const url = `https://fast-tor-02463.herokuapp.com/destination/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, [_id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://fast-tor-02463.herokuapp.com/orders/${_id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      });
    console.log(data);
  };
  const destination = destinations[0];
  return (
    <div>
      <div className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className="p-3">
              <div className="card mb-3">
                <img
                  src={destination?.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{destination?.name}</h5>
                  <p className="card-text">{destination?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3">
            <h3>Shipment Form</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  className="p-2 m-2"
                  placeholder="Enter your name"
                  defaultValue={user?.displayName}
                  {...register("user", { required: true })}
                />
                <input
                  className="p-2 m-2"
                  placeholder="Enter your email"
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                />

                <input
                  className="p-2 m-2"
                  placeholder="Enter your destination"
                  defaultValue={destination?.name}
                  {...register("name", { required: true })}
                  required
                />

                {/* include validation with required or other standard HTML validation rules */}
                <input
                  className="p-2 m-2"
                  type="text"
                  placeholder="Enter your address"
                  defaultValue="Address"
                  {...register("address", { required: true })}
                  required
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input
                  className="btn btn-dark w-50"
                  type="submit"
                  value="place order"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
