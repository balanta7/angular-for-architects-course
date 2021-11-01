import { Component, OnInit } from '@angular/core';
import { DataStore } from '../state-management/observable-store/data.store';

@Component({
  selector: 'app-observable-store-buttons',
  templateUrl: './observable-store-buttons.component.html',
  styleUrls: ['./observable-store-buttons.component.scss']
})
export class ObservableStoreButtonsComponent {
  constructor(private dataStore: DataStore) { }

  public addData() {
    this.dataStore.addDataToStore({
      title: 'The title...',
      text: 'The text for the lab!',
      description: 'This represents the data for the lab where a state management was implemented.'
    });
  }
  
  public removeData() {
    this.dataStore.removeDataFromStore();
  }
}
