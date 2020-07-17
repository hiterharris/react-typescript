import {Count} from '../types/Count';
import {
    CountActionTypes,
    SET_COUNT,
    INCREMENT,
} from '../types/actions';

const initialState = {
  count: 0,
  name: 'Hiter',
}

const reducerDefaultState: Count = initialState;

const countReducer = (
  state = reducerDefaultState,
  action: CountActionTypes
) : Count[] => {
  switch (action.type) {
    case SET_COUNT:
      return [state];
    case INCREMENT:
      return [
        state,
        action.count,
      ]
    default:
      return [state];
  }
}
export {countReducer};