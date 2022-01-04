const order = (state = [], action) => {
  switch (action.type) {
    case "SETORDER":
      return (state = action.data);
    default:
      return state;
  }
};
export default order;
