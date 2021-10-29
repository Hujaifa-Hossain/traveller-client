import React from "react";
import { useForm } from "react-hook-form";

const AddDestination = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // data.email = user?.email;
    fetch("https://fast-tor-02463.herokuapp.com/addDestination", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          placeholder="Name"
          className="p-2 m-2 w-100"
        />
        <br />
        <input
          {...register("description")}
          placeholder="Description"
          className="p-2 m-2 w-100"
        />
        <br />
        <input
          {...register("image", { required: true })}
          placeholder="Image Link"
          className="p-2 m-2 w-100"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <p className="w-50 m-auto p-2">
          <input
            type="submit"
            value="Add Destination"
            className="btn btn-dark d-block m-auto"
          />
        </p>
      </form>
    </div>
  );
};

export default AddDestination;
