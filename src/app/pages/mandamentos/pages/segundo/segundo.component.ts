import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/pages/mandamentos/components/sin-list/sin-list.component';
import { SEGUNDO_MANDAMENTO } from 'src/app/shared/data/SegundoMandamento';

@Component({
    selector: 'app-segundo',
    templateUrl: './segundo.component.html',
    styleUrls: ['./segundo.component.scss'],
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
    ]
})
export class SegundoComponent {
  commandments = SEGUNDO_MANDAMENTO;
}
