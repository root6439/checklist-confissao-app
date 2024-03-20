import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IonContent } from '@ionic/angular/standalone';
import { Share } from '@capacitor/share';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { jsPDF } from 'jspdf';
import { Store } from '@ngrx/store';
import { AppState, ISin } from 'src/app/store/app-state';
import { selectSins } from 'src/app/store/sins.selectors';
import { addHistory } from 'src/app/store/history/history.actions';

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
  constructor(private store: Store<AppState>) {}

  selectedSins: ISin[] = [];

  ngOnInit(): void {
    this.store
      .select(selectSins)
      .subscribe((sins) => (this.selectedSins = sins));

    this.store.dispatch(
      addHistory({ sins: this.selectedSins, date: new Date() })
    );
  }

  print() {
    this.shareFile();
  }

  async shareFile() {
    const base64Data = await this.createFile();

    const data = new Date();
    const fileName = `exame_de_consciencia_${data.getMilliseconds()}.pdf`;

    Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Documents,
    })
      .then(() => {
        return Filesystem.getUri({
          directory: Directory.Documents,
          path: fileName,
        });
      })
      .then((uriResult) => {
        return Share.share({
          title: fileName,
          text: fileName,
          url: uriResult.uri,
        });
      });
  }

  async createFile() {
    let currentY = 10; // Posição Y inicial
    let currentLine = 0; // Número de linhas atual

    const doc = new jsPDF();

    const lineHeight = doc.getLineHeight(); // Altura de uma linha em pontos
    const pageHeight = doc.internal.pageSize.height; // Altura da página em pontos
    const maxLinesPerPage = Math.floor(pageHeight / lineHeight); // Número máximo de linhas por página

    this.addText(
      doc,
      `
Penitente: Abençoai-me, Padre, por que pequei.
Sacerdote: Que o Senhor esteja em teus lábeios e em teu coração para que possas confessar bem todos os teus pecados. Em nome do Pai, do Filho e do Espírito Santo.
Minha última Confissão foi há... (dizer a data da última confissão, ao menos aproximadamente.) Em seguida, o penitente se acusa de seus pecados, dizendo o tipo de pecado e as circunstâncias que podem mudar a espécie e se for grave, o número de vezes que o cometeu.`,
      10
    );

    doc.addPage();

    const selectedSins = this.selectedSins.map((value) => `• ${value.text}`);

    selectedSins.forEach((value) => {
      if (currentLine < maxLinesPerPage) {
        if (currentY + lineHeight > pageHeight) {
          doc.addPage(); // Adiciona uma nova página se o texto não couber na página atual
          currentY = 10; // Reseta a posição Y para o topo da nova página
          currentLine = 0; // Reseta o número de linhas para a nova página
        }
        this.addText(doc, value, currentY); // Adiciona o texto à página
        currentY += lineHeight; // Incrementa a posição Y para a próxima linha
        currentLine++;
      }

      // positionY += 20;
      // this.addText(doc, value, positionY);
    });

    doc.addPage();

    this.addText(
      doc,
      `
Depois da confissão dos pecados, o penitente diz:
Acuso-me destes pecados, de todos os que não me lembro e dos de minha vida passada. Deles peçe o a Deus, e a vós, Padre, a penitência e a absolvição.
O Sacerdote faz pequena prática, dá os conselhos necessários e exorta o penitente à contrição e confiança na misericórdia divina, incentivando-o ao amor para com Deus. Após as palavras do Padre, o penitente recita o ato de contrição:
Penitente: Senhor meu Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu, por serdes vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas, e porque vos amo e vos estimo, pesa-me, Senhor, de todo o meu coração, de vos ter ofendido; e proponho firmemente, ajudado com os auxilios de vossa divina graça, emendar-me e nunca mais tornar a vos ofender; espero alcançar de vossa infinita misericórdia o perdão de minhas culpas. Amém.
O sacerdote recita a fórmula de absolvição. Depois, propõe-lhe uma obra de penitencia que a penitente aceita para satisfação pelos pecados e para emenda da vida.
Sacerdote: Deus, Pai de misericórdia, que, pela morte e ressurreição de seu Filho, reconciliou o mundo consigo e enviou o Espírito Santo para remissão dos pecados, te conceda, pelo ministério da Igreja, o perdão e a paz. E eu te absolvo dos teus pecados em nome do Pai, e do Filho, e do Espirito Santo. Depois da absolvição, o sacerdote prossegue: A paixão de nosso Senhor Jesus Cristo, a intercessão da Santissima Virgem Maria e de todos os Santos, o bem que fizeres e o mal que suportares, tudo te aproveite para remissão dos pecados, aumento da graça e penhor da vida eterna. Vai em paz e anuncia no mundo as maravilhas de Deus, que te salvou.
Oração para depois da confissão (após sair do confessionário)
Meu bom Jesus, quão bondoso sois! Oh! Quem nunca vos ofendera! Apesar de ter sido tão ingrato para convosco morte, quando eu estava minha ousadia em ansgr e trouxestes-me o vos acebeis na vossa amizade. Podicis ter me dado a podíeis ter me sepultado no inferno para castigar a lei. Mas o vosso amor superou à minha ingratidão ara ai me pordes de novo em vossa graça e tranquilizardes o nundito sejais, o meu Deus misericordioso! Não permitais que eu perca de nove graça recebida! Antes morrer, que ofender-vos! Meu bom Jesus, minha Mãe Maria Santissima, meu anjo da guarda, valei-me, para que não torné a pecar.
        `,
      10
    );

    return doc.output('datauristring');
  }

  addText(doc: jsPDF, text: string, positionY: number) {
    const textFormatted = doc.splitTextToSize(
      text,
      doc.internal.pageSize.width - 20
    );
    return doc.text(textFormatted, 10, positionY);
  }
}
