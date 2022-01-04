import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../../../../action/index.action';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => dispatch(setUsers(data)))
    }, [users]);

    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure for delete this user??')
        if (confirmation) {
            fetch(`http://localhost:5000/user/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <div>
            <h1>Users list {users.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td><Button onClick={() => handleDelete(user._id)}>Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default UserList;