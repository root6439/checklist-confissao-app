import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonContent } from '@ionic/angular/standalone';
import { History } from '../shared/models/History';
import { DatePipe } from '../shared/pipes/date.pipe';
import { Store } from '@ngrx/store';
import {
  selectHistory,
  selectSinsOfHistoryById,
} from '../store/history/history.selectors';
import { HistoryState } from '../store/history/history.state';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [IonContent, MatExpansionModule, DatePipe],
})
export class HistoryComponent implements OnInit {
  constructor(private store: Store<HistoryState>) {}

  historyData: History[] = [];

  ngOnInit() {
    this.store
      .select(selectHistory)
      .subscribe((data) => (this.historyData = data));
  }

  getData(id: number) {
    const history = this.historyData.find((value) => value.id == id);

    if (history.sins?.length > 0) {
      return;
    }

    this.store
      .select(selectSinsOfHistoryById(id))
      .subscribe((value) => (history.sins = value));
  }
}
