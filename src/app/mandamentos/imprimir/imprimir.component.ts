import { MatIconModule } from '@angular/material/icon';
import { MandamentosService } from './../mandamentos.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IonContent } from '@ionic/angular/standalone';
import { Share } from '@capacitor/share';
import * as htmlToImage from 'html-to-image';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    IonContent,
  ],
})
export class ImprimirComponent implements OnInit {
  constructor(public service: MandamentosService) {}

  ngOnInit(): void {
    console.log(this.service.pecadosSelecionados);
  }

  print() {
    this.createFile();
  }

  async createFile() {
    // const dataUrl = await htmlToImage.toPng(document.getElementById('htmlData'));
    const dataUrl = "textblabla"

    await Filesystem.writeFile({
      path: 'text.png',
      data: dataUrl,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

    const contents = await Filesystem.readFile({
      path: 'text.png',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

    const data = await this.blobToString(contents.data as Blob);

    this.shareFile(data);
  }

  async shareFile(url: string) {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url,
      dialogTitle: 'Share with buddies',
    });
  }

  blobToString(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        const base64String = dataUrl.split(',')[1];
        resolve(atob(base64String));
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  }
}
