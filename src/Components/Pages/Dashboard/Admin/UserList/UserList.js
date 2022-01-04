import React, { useEffect } from 'react';

const UserList = () => {
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>user list</h1>
        </div>
    );
};

export default UserList;