import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { IonContent } from '@ionic/angular/standalone';
import { take } from 'rxjs';
import { DatePipe } from '../../shared/pipes/date.pipe';
import { ShareService } from '../../shared/services/share.service';
import { History } from './models/history';
import { HistoryService } from './services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  imports: [
    IonContent,
    MatExpansionModule,
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  readonly shareService = inject(ShareService);
  readonly historyService = inject(HistoryService);

  readonly historyData = this.historyService.exams;

  public handleConfession(data: History, confessionDone: boolean) {
    if (confessionDone) {
      this.confessionDone(data);
    } else {
      this.openDialogConfirmExclusion(data);
    }
  }

  private deleteExam(data: History) {
    this.historyService.removeExam(data.id);
  }

  private confessionDone(data: History) {
    this.deleteExam(data);
    this.showMessage('Confissão concluída');
  }

  private openDialogConfirmExclusion(data: History) {
    this.dialog
      .open(HaveYouConfessateComponent)
      .afterClosed()
      .pipe(take(1))
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.deleteExam(data);
          this.showMessage('Registro excluído');
        }
      });
  }

  private showMessage(msg: string) {
    this.snackBar.open(msg, undefined, { duration: 3000 });
  }

  public share(data: History) {
    this.shareService.shareFile(data.sins);
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
})
class HaveYouConfessateComponent {}
