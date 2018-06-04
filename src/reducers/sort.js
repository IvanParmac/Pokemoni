export default (state = '', action) => {
  switch (action.type) {
    case 'SORT_BY':
      return action.sort;
    default:
      return state;
  }
};
