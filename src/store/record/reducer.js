import * as actions from "./actions";

const initialState = {
  records: [],
  updated: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case actions.GET_RECORDS:
      return {
        ...state,
        records: action.records,
        error: action.error,
      };
    case actions.ADD_RECORD:
      return {
        ...state,
        record: action.record,
      };
    case actions.UPDATE_RECORD:
      return {
        ...state,
        record: action.record,
        error: action.error,
      };
    case actions.DELETE_RECORD:
      console.log(action);
      return {
        ...state,
        updated: action.updated,
      };
    default:
      return state;
  }
};

export default reducer;
