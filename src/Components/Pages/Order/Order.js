import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Order.css';

const Order = () => {
   const [service, setService] = useState([]);
   const [amount, setAmount] = useState(0);
   const {users} = useFirebase();
   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      fetch(`http://localhost:5000/service/${id}`)
         .then(res => res.json())
         .then(data => setService(data));
   }, [id])
   const { register, handleSubmit } = useForm();
   const amountCalc = (person) => {
      setAmount(person * service.amount);
   }
   const onSubmit = data => {
      const finallData = { ...data, payment: amount, name: users.displayName, email: users.email, id: id, title: service.title };
      localStorage.setItem('order', JSON.stringify(finallData));
      navigate('/pay');
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
                     <input type='number' {...register("phone")} required placeholder='Phone Number' />
                     <input type='date' {...register("date")} required placeholder='Event Date' />
                     <input onKeyUp={(e) => amountCalc(e.target.value)} {...register("person")} placeholder='Total Person' required />
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