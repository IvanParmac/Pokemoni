export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARDS':
      return action.payload;
    default:
      return state;
  }
};
