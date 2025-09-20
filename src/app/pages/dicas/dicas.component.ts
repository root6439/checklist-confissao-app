import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.scss'],
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DicasComponent {}
