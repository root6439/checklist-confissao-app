import { createAction, props } from '@ngrx/store';

export const addSin = createAction('[Sin] Add Sin', props<{ text: string }>());

export const removeSin = createAction(
  '[Sin] Remove Sin',
  props<{ text: string }>()
);

export const clear = createAction('[Sin] Clear');
