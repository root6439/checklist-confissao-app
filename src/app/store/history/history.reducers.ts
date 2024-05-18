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
    data: [...state.data, { id: state.data.length + 1, date, sins }],
  })),
  on(removeHistory, (state, { id }) => ({
    ...state,
    data: state.data.filter((value) => value.id != id),
  }))
);

export function historyReducer(
  state: HistoryState | undefined,
  action: Action
) {
  return _historyReducer(state, action);
}
