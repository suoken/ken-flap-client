import { AnyAction } from 'redux';
import { DECREMENT_PART, INCREMENT_PART, ADD_PART, SET_NOTES } from '../../actions/parts';

// import { v4 as uuid } from 'uuid';

const initialState = [
  {
    name: 'Wheel',
    amount: 0,
    notes: '',
  },
  {
    name: 'Chasis',
    amount: 0,
    notes: '',
  },
  {
    name: 'Engine',
    amount: 0,
    notes: '',
  },
  {
    name: 'Windshield',
    amount: 0,
    notes: '',
  },
];

const partsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_PART: {
      const idx = state.findIndex(part => part.name === action.partName);
      return [
        ...state.slice(0, idx),
        { ...state[idx], amount: state[idx].amount + 1},
        ...state.slice(idx + 1)
      ];
    }
    case DECREMENT_PART: {
      const idx = state.findIndex(part => part.name === action.partName);
      return [
        ...state.slice(0, idx),
        { ...state[idx], amount: state[idx].amount - 1 },
        ...state.slice(idx + 1)
      ];
    }

    case ADD_PART: {
      return [
        ...state,
        { name: action.partName, amount: 0, notes: '' },
      ];
    }

    case SET_NOTES: {
      const idx = state.findIndex(part => part.name === action.partName);
      return [
        ...state.slice(0, idx),
        { ...state[idx], amount: state[idx].amount, notes: action.notes },
        ...state.slice(idx + 1),
      ];
    }

    default:
      return state;
  }
};

export default partsReducer;
