import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../allHooks/useFirebase";

const MyOrders = () => {
  const { user } = useFirebase();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user?.displayName} />
        <input defaultValue={user?.email} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default MyOrders;
