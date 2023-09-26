import { Dispatch } from 'redux';

export const INCREMENT_PART = 'local/INCREMENT_PART';
export const DECREMENT_PART = 'local/DECREMENT_PART';
export const ADD_PART = 'ADD_PART';
export const SET_NOTES = 'SET_NOTES';

export const incrementPart = (partName: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: INCREMENT_PART,
    partName,
  });

export const decrementPart = (partName: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: DECREMENT_PART,
    partName,
  });

export const addPart = (partName: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: ADD_PART,
    partName,
  });

export const setNotes = (partName: string, notes: string) => (dispatch: Dispatch<any>) =>
  dispatch({
    type: SET_NOTES,
    partName,
    notes,
});