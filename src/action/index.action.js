export const setUsers = (data) => {
   return {
      type: 'SETUSER',
      data: data
   }
}

export const setOrders = (data) => {
   return {
     type: "SETORDER",
     data: data,
   };
}

export const setServices = (data) => {
   return {
      type: 'SETSERVICES',
      data: data
   }
}