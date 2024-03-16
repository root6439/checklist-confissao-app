import { Mandamento, Pecado } from './../../shared/models/Mandamento';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SEGUNDO_MANDAMENTO } from 'src/app/shared/data/SegundoMandamento';
import { MandamentosService } from '../mandamentos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/shared/sin-list/sin-list.component';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    IonContent,
    SinListComponent,
  ],
})
export class SegundoComponent {
  commandments: Mandamento = SEGUNDO_MANDAMENTO;
}
