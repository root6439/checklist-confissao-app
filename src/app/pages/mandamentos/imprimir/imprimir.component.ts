import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IonContent } from '@ionic/angular/standalone';
import { ISin } from 'src/app/shared/models/sin';
import { ShareService } from 'src/app/shared/services/share.service';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.scss'],
  imports: [
    MatIconModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    IonContent,
  ],
})
export class ImprimirComponent implements OnInit {
  private shareService = inject(ShareService);

  selectedSins: ISin[] = [];

  ngOnInit(): void {}

  print() {
    this.shareService.shareFile(this.selectedSins);
  }
}
