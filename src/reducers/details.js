
export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DETAILS':
      return {};
    case 'ADD_DETAILS':
      return action.card;
    default:
      return state;
  }
};
