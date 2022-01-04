const servicesState = (state = [], action) => {
   switch (action.type) {
      case 'SETSERVICES':
         return state = action.data
      default:
         return state
   }
}
export default servicesState;