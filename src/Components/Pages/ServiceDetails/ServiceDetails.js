import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);
    console.log(service);
    return (
        <section className='section-sp'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="service-details">
                            <img src={service.url} alt="" />
                            <h1 className='title'>{service.title}</h1>
                            <p className='desc'>{service.Discretion}</p>
                            <p className='desc'>Per Person Ammount: ${service.amount}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="order-part">
                            <Link to={`/order/${id}`}>Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;