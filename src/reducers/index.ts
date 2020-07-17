import {Count} from '../types/Count';
import {
    CountActionTypes,
    SET_COUNT,
} from '../types/actions';

// const initialState = {
//   count: 2
// }

// const countReducer = (
//   state = initialState,
//   action: CountActionTypes
// ): Count[] => {
//   switch (action.type) {
//       case SET_COUNT:
//         return [...state, action.count];
//     default:
//       return [state];
//   }
// };

// export {countReducer} ;

const initialState = {
  count: 0
}

const countReducerDefaultState: Count[] = [initialState];

const countReducer = (
  state = countReducerDefaultState,
  action: CountActionTypes
) : Count[] => {
  switch (action.type) {
    case SET_COUNT:
      return [...state, action.count];
    default:
      return state;
  }
}

export {countReducer}

// const expensesReducerDefaultState: Expense[] = [];

// const expenseReducer = (
//   state = expensesReducerDefaultState,
//   action: ExpenseActionTypes
// ): Expense[] => {
//   switch (action.type) {
//     case ADD_EXPENSE:
//       return [...state, action.expense];
//     case REMOVE_EXPENSE:
//       return state.filter(({ id }) => id !== action.id);
//     case EDIT_EXPENSE:
//       return state.map(expense => {
//         if (expense.id === action.expense.id) {
//           return {
//             ...expense,
//             ...action.expense
//           };
//         } else {
//           return expense;
//         }
//       });
//     case SET_EXPENSES:
//       return action.expenses;
//     default:
//       return state;
//   }
// };

// export { expenseReducer };