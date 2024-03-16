import { createReducer, on } from '@ngrx/store';
import { addSin, clear, removeSin } from './sins.actions';
import { AppState, ISin } from './app-state';

const initialState: AppState = {
  sins: [],
};

export const sinReducer = createReducer(
  initialState,
  on(addSin, (state, { text }) => ({
    ...state,
    sins: [...state.sins, { text }], // Crie uma nova referência para o array de sins
  })),
  on(removeSin, (state, { text }) => ({
    ...state,
    sins: state.sins.filter((value) => value.text != text),
  })),
  on(clear, (state) => ({ ...state, sins: [] }))
);
