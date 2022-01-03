import React from 'react';
import {  Card } from 'react-bootstrap';
import './Service.css';
import image from './../../../images/event-1.jpg';
import { Link } from 'react-router-dom';

const Service = () => {
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
                    <div className="col-md-4">
                        <div className="service-single mb-30">
                            <Card>
                                <div className="service-image">
                                    <Card.Img variant="top" src={image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Link to="#">Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-single mb-30">
                            <Card>
                                <div className="service-image">
                                    <Card.Img variant="top" src={image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Link to="#">Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-single mb-30">
                            <Card>
                                <div className="service-image">
                                    <Card.Img variant="top" src={image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Link to="#">Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-single mb-30">
                            <Card>
                                <div className="service-image">
                                    <Card.Img variant="top" src={image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Link to="#">Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-single mb-30">
                            <Card>
                                <div className="service-image">
                                    <Card.Img variant="top" src={image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Link to="#">Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-single mb-30">
                            <Card>
                                <div className="service-image">
                                    <Card.Img variant="top" src={image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Link to="#">Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;