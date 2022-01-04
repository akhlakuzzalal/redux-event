const allOrder = (state = [], action) => {
  switch (action.type) {
    case "SETALLORDER":
      return (state = action.data);
    default:
      return state;
  }
};
export default allOrder;
