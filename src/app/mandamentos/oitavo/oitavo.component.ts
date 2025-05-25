import { OITAVO_MANDAMENTO } from './../../shared/data/OitavoMandamento';
import { Component } from '@angular/core';
import { SinListComponent } from 'src/app/shared/sin-list/sin-list.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
    selector: 'app-oitavo',
    templateUrl: './oitavo.component.html',
    styleUrls: ['./oitavo.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class OitavoComponent {
  commandments = OITAVO_MANDAMENTO;
}
