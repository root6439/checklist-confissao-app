import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    RouterModule,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  isMobile: boolean = window.screen.width <= 720;

  progressData: { [value: string]: number } = {
    'primeiro-mandamento': 10.25,
    'segundo-mandamento': 20.5,
    'terceiro-mandamento': 30.75,
    'quarto-mandamento': 50,
    'quinto-mandamento': 60.25,
    'sexto-e-nono-mandamentos': 70.5,
    'setimo-e-decimo-mandamentos': 80.75,
    'oitavo-mandamento': 100,
  };

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dialog.open(DialogNoDataStorage, {
      width: this.isMobile ? '80%' : '40%',
    });
  }

  onActivate() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get progress(): number {
    let aux: string[] = this.router.url.split('/');

    if (aux[1] != 'checklist' || aux[2] == 'imprimir') {
      return 0;
    }

    return this.progressData[aux[2]];
  }
}

@Component({
  selector: 'no-data-storage-warning',
  template: `<h1 mat-dialog-title class="mb-2">
      Seja bem-vindo ao Checklist Confissão!
    </h1>
    <div mat-dialog-content class="mb-2">
      <p>
        Esse sistema não armazena qualquer informação sua. Marque seus pecados a
        vontade pois ninguém vai ficar sabendo deles.
      </p>
      <p>
        Por favor, divulgue esse projeto para que mais irmãos possam se
        beneficiar com ele.
      </p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-flat-button color="accent" mat-dialog-close>Ok</button>
    </div>`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogNoDataStorage {}
