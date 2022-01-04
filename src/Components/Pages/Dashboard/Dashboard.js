import React from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Dashboard = () => {
  const { users, logOut } = useFirebase();
  return (
    <main className="section-sp">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-2">
              <div className="left-menu">
                <ul className="deshboard-menu">
                  {!users.displayName ? (
                    <span>
                      {" "}
                      <li>
                        <Link to="/dashboard/userlist">
                          <span className="dash-icon" title="Dashboard"></span>{" "}
                          <span className="desh-text">User List</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/orderlist">
                          <span className="dash-icon" title="Dashboard"></span>{" "}
                          <span className="desh-text">Order List</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/addservice">
                          <span className="dash-icon" title="Dashboard"></span>{" "}
                          <span className="desh-text">Add Service</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/manageservice">
                          <span className="dash-icon" title="Dashboard"></span>{" "}
                          <span className="desh-text">Manage Service</span>
                        </Link>
                      </li>
                    </span>
                  ) : (
                    <span>
                      <li>
                        <Link to="/dashboard/profilemanage">
                          <span className="dash-icon" title="Dashboard"></span>{" "}
                          <span className="desh-text">Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/myorder">
                          <span className="dash-icon" title="Dashboard"></span>{" "}
                          <span className="desh-text">My Order</span>
                        </Link>
                      </li>
                    </span>
                  )}
                  <li>
                    <Button onClick={logOut} className="logout-btn">
                      <span className="dash-icon"></span>{" "}
                      <span className="desh-text">Logout</span>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-10">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
