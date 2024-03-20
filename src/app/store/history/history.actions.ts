import { createAction, props } from '@ngrx/store';
import { ISin } from '../app-state';

export const addHistory = createAction(
  '[History] Add History',
  props<{ sins: ISin[]; date: Date }>()
);

export const removeHistory = createAction(
  '[History] Remove History',
  props<{ id: number }>()
);
