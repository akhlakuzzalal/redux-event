import { Button } from 'bootstrap';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Details for {id}</h1>
            <Link to={`/order/${id}`}>Order Now</Link>
        </div>
    );
};

export default ServiceDetails;