import { ISin } from '../../mandamentos/models/sin';

export type History = {
  id: number;
  date: Date;
  sins: ISin[];
};
