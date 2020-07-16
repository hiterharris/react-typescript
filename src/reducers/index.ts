import {Count} from '../types/Count';
import {
    CountActionTypes,
    SET_COUNT,
} from '../types/actions';

const initialState = {
  count: 2
}

const countReducer = (
  state = initialState,
  action: CountActionTypes
): Count[] => {
  switch (action.type) {
      case SET_COUNT:
        return [state, action.count];
    default:
      return [state];
  }
};

export { countReducer };
