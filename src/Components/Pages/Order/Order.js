import React from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
   const { id } = useParams()
   return (
      <div>
         <h2>Order for {id}</h2>
      </div>
   );
};

export default Order;