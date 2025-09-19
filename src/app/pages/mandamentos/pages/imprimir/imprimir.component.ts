import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IonContent } from '@ionic/angular/standalone';
import { HistoryService } from 'src/app/pages/history/services/history.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { SinsCommittedService } from '../../services/sins-committed.service';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.scss'],
  imports: [MatIcon, MatIconButton, IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImprimirComponent implements OnInit {
  readonly shareService = inject(ShareService);
  readonly sinsService = inject(SinsCommittedService);
  readonly historyService = inject(HistoryService);

  readonly selectedSins = this.sinsService.committedSins;

  ngOnInit(): void {
    this.historyService.addExam({
      date: new Date(),
      sins: this.sinsService.committedSins(),
    });
  }

  print() {
    this.shareService.shareFile(this.sinsService.committedSins());
  }
}
