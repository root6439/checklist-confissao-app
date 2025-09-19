import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-confissao',
  templateUrl: './confissao.component.html',
  styleUrls: ['./confissao.component.scss'],
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfissaoComponent {}
