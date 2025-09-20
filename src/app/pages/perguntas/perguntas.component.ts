import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss'],
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerguntasComponent {}
