import { ISin } from 'src/app/store/app-state';

export class History {
  id: number;
  date: Date;
  sins?: ISin[];
}
