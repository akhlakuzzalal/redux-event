import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Order.css';

const Order = () => {
   const [service, setService] = useState([]);
   const [amount, setAmount] = useState(0);
   const {users} = useFirebase();
   const { id } = useParams();
   useEffect(() => {
      fetch(`http://localhost:5000/service/${id}`)
         .then(res => res.json())
         .then(data => setService(data));
   }, [id])
   const { register, handleSubmit } = useForm();
   const amountCalc = (person) => {
      setAmount(person * service.amount)
      console.log(person)
   }
   const onSubmit = data => {
      const finallData = { ...data, payment: amount, name: users.displayName, email: users.email, id: id };
      console.log(finallData);
   };
   return (
      <section className='section-sp'>
         <div className="container">
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
               <div className="col-md-8">
                 <div className="order-form">
                     <h2>{service.title}</h2>
                     <input value={users.displayName} disabled/>
                     <input value={users.email} disabled/>
                     <input type='number' {...register("phone")} placeholder='Phone Number' />
                     <input type='date' {...register("date")} placeholder='Event Date' />
                     <input onKeyUp={(e) => amountCalc(e.target.value)} {...register("person")} placeholder='Total Person' />
                 </div>
               </div>
               <div className="col-md-4">
                  <div className="order-part">
                     <p>Total Amount: ${amount}</p>
                     <input type="submit" value={'Pay Now'} />
                  </div>
               </div>
            </div>
            </form>
         </div>
      </section>
   );
};

export default Order;