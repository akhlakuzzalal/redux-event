import React from 'react';
import Payment from './Payment';

const Pay = () => {
   const orderData = JSON.parse(localStorage.getItem('order'));
   console.log(orderData);
   return (
      <div className='py-5 about-background'>
         {
            orderData && <div>
            <h2 className='text-center pb-2'>Pay for {orderData.title}</h2>
            <Payment orderData={orderData}></Payment>
         </div>
         }
      </div>
   );
};

export default Pay;