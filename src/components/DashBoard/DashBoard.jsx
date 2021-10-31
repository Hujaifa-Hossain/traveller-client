import React, { useState } from "react";
import AddService from "../AddService/AddService";
import ManageOrders from "../ManageOrders/ManageOrders";
import MyOrders from "../MyOrders/MyOrders";

const DashBoard = () => {
  const [control, setControl] = useState("allVolunteers");

  console.log(control);
  return (
    <div>
      <div className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className="p-3">
              {control === "MyOrders" && <MyOrders></MyOrders>}
              {control === "ManageOrders" && <ManageOrders></ManageOrders>}
              {control === "AddService" && <AddService></AddService>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3">
              <div className="bg-dark rounded text-white p-5">
                <h6>Dashboard</h6>
                <div className="mt-5">
                  <li onClick={() => setControl("MyOrders")} className="p-2">
                    My Orders
                  </li>
                  <li
                    onClick={() => setControl("ManageOrders")}
                    className="p-2"
                  >
                    Manage Orders
                  </li>
                  <li onClick={() => setControl("AddService")} className="p-2">
                    Add Service
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row gx-5"></div>
    </div>
  );
};

export default DashBoard;
