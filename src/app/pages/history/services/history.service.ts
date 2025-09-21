import { Injectable, signal } from '@angular/core';
import { History } from 'src/app/pages/history/models/history';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private readonly examsValue = signal<History[]>(
    JSON.parse(localStorage.getItem('history') ?? '[]')
  );

  exams = this.examsValue.asReadonly();

  addExam(exam: Pick<History, 'date' | 'sins'>) {
    let id = 1;

    if (this.exams().length > 0) {
      id = this.exams().at(-1)?.id! + 1;
    }

    this.examsValue.update((exams) => [...exams, { ...exam, id }]);
    this.updateStorage();
  }

  removeExam(id: number) {
    const newList = this.exams().filter((exam) => exam.id != id);

    this.examsValue.set(newList);
    this.updateStorage();
  }

  private updateStorage() {
    localStorage.setItem('history', JSON.stringify(this.exams()));
  }
}
