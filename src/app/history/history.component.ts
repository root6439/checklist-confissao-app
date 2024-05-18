import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonContent } from '@ionic/angular/standalone';
import { History } from '../shared/models/History';
import { DatePipe } from '../shared/pipes/date.pipe';
import { Store } from '@ngrx/store';
import {
  selectHistory,
  selectSinsOfHistoryById,
} from '../store/history/history.selectors';
import { HistoryState } from '../store/history/history.state';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { addHistory, removeHistory } from '../store/history/history.actions';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    MatExpansionModule,
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
})
export class HistoryComponent implements OnInit {
  constructor(private store: Store<HistoryState>, private dialog: MatDialog) {}

  historyData: History[] = [];

  public ngOnInit() {
    this.store.select(selectHistory).subscribe((data) => {
      this.historyData = data;
    });

    this.store.dispatch(addHistory({ sins: [], date: new Date() }));
  }

  public getData(id: number) {
    const history = this.historyData.find((value) => value.id == id);

    if (history.sins?.length > 0) {
      return;
    }

    this.store
      .select(selectSinsOfHistoryById(id))
      .subscribe((value) => (history.sins = value));
  }

  public handleConfession(data: History, confessionDone: boolean) {
    if (confessionDone) {
      this.confessionDone(data);
    } else {
      this.openDialogConfirmExclusion(data);
    }
  }

  private deleteExam(data: History) {
    this.store.dispatch(removeHistory({ id: data.id }));
  }

  private confessionDone(data: History) {
    this.celebrate();
    this.deleteExam(data);
  }

  private openDialogConfirmExclusion(data: History) {
    this.dialog
      .open(HaveYouConfessateComponent)
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.deleteExam(data);
        }
      });
  }

  private celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 1000,
    });
  }
}

@Component({
  selector: 'app-have-you-confessate',
  template: `
    <h2 mat-dialog-title>Exclusão de exame de consciência</h2>
    <mat-dialog-content>
      Tem certeza que deseja remover esse registro? Essa alteração não poderá
      ser desfeita.
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-flat-button [mat-dialog-close]="true" color="accent">
        Confirmar
      </button>
      <button mat-button mat-dialog-close>Cancelar</button>
    </mat-dialog-actions>
  `,
  imports: [MatDialogModule, MatButtonModule],
  standalone: true,
})
class HaveYouConfessateComponent {}
