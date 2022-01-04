import React from 'react';
// import { useParams } from 'react-router-dom';
import Payment from './Payment';

const Pay = () => {
   const orderData = JSON.parse(localStorage.getItem('order'));
   console.log(orderData);
   // const price = useParams()
   const price = orderData.payment;
   return (
      <div className='py-5 about-background'>
         <h2 className='text-center pb-2'>Pay for {orderData.title}</h2>
         <Payment money={price}></Payment>
      </div>
   );
};

export default Pay;