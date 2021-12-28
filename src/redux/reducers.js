const initialState = {
  isList: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GRID_VIEW':
      return {
        ...state,
        isList: !state.isList,
      };
    default:
      return state;
  }
};

export default reducers;
