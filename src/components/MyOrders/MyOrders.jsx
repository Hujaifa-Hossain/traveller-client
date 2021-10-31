import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    fetch("https://fast-tor-02463.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleCancel = (_id) => {
    fetch(`https://fast-tor-02463.herokuapp.com/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remainingOrders = orders.filter((order) => order._id !== _id);
          setOrders(remainingOrders);
        } else {
          alert("Something is wrong");
        }
      });
  };

  return (
    <div className="text-center">
      <table className="table container">
        <thead className="mx-auto">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => {
            const { _id, name, email } = order;

            return (
              <tr key={_id}>
                <td>{name}</td>

                <td>{email}</td>
                <td>
                  <button
                    onClick={() => handleCancel(_id)}
                    className="btn btn-warning"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
