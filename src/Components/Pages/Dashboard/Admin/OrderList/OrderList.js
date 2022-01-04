import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAllOrders } from "../../../../../action/index.action";
const OrderList = () => {
  const dispatch = useDispatch();
  const allorder = useSelector((state) => state.allOrder);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => dispatch(setAllOrders(data)));
  }, [allorder]);
  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure for delete this user??");
    if (confirmation) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allorder.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.email}</td>
              <td>${user.payment}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(user._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
