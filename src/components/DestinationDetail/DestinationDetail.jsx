import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../allHooks/useFirebase";

const DestinationDetail = () => {
  const { _id } = useParams();
  const { user } = useFirebase();

  const [destinations, setDestinations] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/destination/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, [_id]);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/destination/${_id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  const destination = destinations[0];
  return (
    <div>
      <div class="container overflow-hidden">
        <div class="row gx-5">
          <div class="col-lg-6">
            <div class="p-3">
              <div class="card mb-3">
                <img src={destination?.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{destination?.name}</h5>
                  <p class="card-text">{destination?.description}</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user?.displayName} />
                <input defaultValue={user?.email} />
                <input defaultValue={destination?._id} />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
