import React, { useEffect, useState } from "react";
import useFirebase from "../../allHooks/useFirebase";

const ManageOrders = () => {
  const { user } = useFirebase();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://fast-tor-02463.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [user?.email]);


  return (
    <div>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">user</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
          </tr>
        </thead>

        {cart.map((i) => (
          <tbody>
            <tr>
              <td>{i?.user}</td>
              <td>{i?.email}</td>
              <td>
                {i.address}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageOrders;
