import { Injectable, signal } from '@angular/core';
import { History } from 'src/app/shared/models/History';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private readonly examsValue = signal<History[]>([]);

  exams = this.examsValue.asReadonly();

  addExam(exam: Pick<History, 'date' | 'sins'>) {
    let id = 1;

    if (this.exams().length > 0) {
      id = this.exams().at(-1)?.id! + 1;
    }

    this.examsValue.update((exams) => [...exams, { ...exam, id }]);
  }

  removeExam(id: number) {
    const newList = this.exams().filter((exam) => exam.id != id);

    this.examsValue.set(newList);
  }
}
