import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app-state';

const selectSinsState = createFeatureSelector<AppState>('sins');

export const selectAtLeastOneSelected = createSelector(
  selectSinsState,
  (state) => state.sins.length > 0
);

export const selectSins = createSelector(
  selectSinsState,
  (state) => state.sins
);
