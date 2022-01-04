import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Order = () => {
   const [service, setService] = useState([]);
   const [amount, setAmount] = useState(0);
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
      const finallData = { ...data, payment: amount };

   };
   console.log(amount.toString())
   return (
      <div>
         <h2>Order for {id}</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("name")} placeholder='Name' />
            <input {...register("email")} placeholder='Email' />
            <input {...register("phone")} placeholder='Phone Number' />
            <input {...register("date")} placeholder='Event Date' />
            <input onKeyUp={(e) => amountCalc(e.target.value)} {...register("person")} placeholder='Totall person' />
            <p>{amount}</p>
            <input type="submit" value={'Pay Now'} />
         </form>
      </div>
   );
};

export default Order;