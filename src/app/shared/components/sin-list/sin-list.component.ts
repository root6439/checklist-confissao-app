import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { Pecado } from '../../models/Mandamento';

@Component({
  selector: 'sin-list',
  templateUrl: './sin-list.component.html',
  styleUrls: ['./sin-list.component.scss'],
  imports: [
    RouterModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinListComponent implements OnInit {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly sins = input.required<Pecado[]>();
  readonly nextRoute = input.required<string>();

  selectedSins: string[] = [];

  ngOnInit() {}

  toggleSin(text: string, checked: boolean) {}
}
