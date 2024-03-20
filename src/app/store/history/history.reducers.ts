import { Action, createReducer, on } from '@ngrx/store';
import { HistoryState } from './history.state';
import { addHistory, removeHistory } from './history.actions';

const initialState: HistoryState = {
  data: [],
};

const _historyReducer = createReducer(
  initialState,
  on(addHistory, (state, { date, sins }) => ({
    ...state,
    data: [...state.data, { id: state.data.length + 1, date, sins }], // Crie uma nova referência para o array de sins
  })),
  on(removeHistory, (state, { id }) => ({
    ...state,
    sins: state.data.filter((value) => value.id != id),
  }))
);

export function historyReducer(
  state: HistoryState | undefined,
  action: Action
) {
  return _historyReducer(state, action);
}
