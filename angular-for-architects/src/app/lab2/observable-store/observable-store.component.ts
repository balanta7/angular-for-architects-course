import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataValue } from '../state-management/observable-store/data.model';
import { DataStore } from '../state-management/observable-store/data.store';

@Component({
  selector: 'app-observable-store',
  templateUrl: './observable-store.component.html',
  styleUrls: ['./observable-store.component.scss']
})
export class ObservableStoreComponent implements OnInit, OnDestroy {

  public data: DataValue | null = null;

  private subscriptions = new Subscription();

  constructor(private dataStore: DataStore) { }

  public ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.dataStore.stateChanged.subscribe(state => {
        if (state) {
            this.data = state.data;
        }
      })
    );
  }
}
