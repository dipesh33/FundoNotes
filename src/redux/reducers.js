const initialState = {
  isList: false,
  uid: '',
  label: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GRID_VIEW':
      return {
        ...state,
        isList: !state.isList,
      };
      case 'SET_LABEL_DATA':
        return {
            ...state,
            labelData: action.payload,
        };
    default:
      return state;
  }
};

export default reducers;
