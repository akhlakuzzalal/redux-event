import React,{useState,useEffect} from "react";
import { Table,Button } from "react-bootstrap";
import useFirebase from "../../../../../hooks/useFirebase";
const OrderList = () => {
  const [user, setUser] = useState([]);
  const {users} = useFirebase()
  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${users.email}`)
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[user.email]);
  
  return (
    <div>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.email}</td>
              <td>${user.payment}</td>
              {/* <td>
                <Button variant="danger" onClick={() => handelClick(user._id)}>
                  Delete
                </Button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
