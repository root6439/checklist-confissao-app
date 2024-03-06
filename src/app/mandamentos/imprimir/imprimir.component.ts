import { MatIconModule } from '@angular/material/icon';
import { MandamentosService } from './../mandamentos.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, MatIconModule, MatButtonModule],
})
export class ImprimirComponent {
  constructor(public service: MandamentosService) {}

  print(): void {
    window.print();
  }
}
