import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicePart = ({ service }) => {
   const { _id, title, Discretion, url } = service
   return (
      <div className="col-md-4">
         <div className="service-single mb-30">
            <Card>
               <div className="service-image">
                  <Card.Img variant="top" src={url} />
               </div>
               <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                     {Discretion}
                  </Card.Text>
                  <Link to={`/service/${_id}`}>Details</Link>
               </Card.Body>
            </Card>
         </div>
      </div>
   );
};

export default ServicePart;