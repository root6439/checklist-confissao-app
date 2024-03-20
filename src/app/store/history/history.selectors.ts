import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HistoryState } from './history.state';

const selectHistoryState = createFeatureSelector<HistoryState>('history');

export const selectHistory = createSelector(selectHistoryState, (state) =>
  state?.data.map((value) => ({
    id: value.id,
    date: value.date,
  }))
);

export const selectSinsOfHistoryById = (id: number) =>
  createSelector(
    selectHistoryState,
    (state) => state.data.find((value) => value.id == id).sins
  );
