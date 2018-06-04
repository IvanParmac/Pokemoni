export default (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITES': {
      const index1 = state.findIndex(favourite => (favourite.id === action.card.id));
      if (index1 === -1) {
        return [...state, action.card];
      }
      return [...state.slice(0, index1), ...state.slice(index1 + 1)];
    }
    default:
      return state;
  }
};
