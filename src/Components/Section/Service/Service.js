import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';
import image from './../../../images/event-1.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setServices } from '../../../action/index.action';
import ServicePart from './ServicePart';

const Service = () => {
    const dispatch = useDispatch()
    const services = useSelector(state => state.services)
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => dispatch(setServices(data)))
    }, [])
    return (
        <section className='section-sp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb-40">
                            <h3 className='text-center'>Our Services</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        services.slice(0, 6).map(service => <ServicePart key={service._id} service={service}></ServicePart>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;