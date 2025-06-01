import { SEXTO_E_NONO_MANDAMENTOS } from '../../../shared/data/SextoENonoMandamento';
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/shared/components/sin-list/sin-list.component';

@Component({
    selector: 'app-sexto-enono',
    templateUrl: './sexto-enono.component.html',
    styleUrls: ['./sexto-enono.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class SextoENonoComponent {
  commandments = SEXTO_E_NONO_MANDAMENTOS;
}
