import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TryObservableServiceComponent } from './lab  Creating an Observable Service/try-observable-service/try-observable-service.component';
import { ObservableStoreButtonsComponent } from './lab2 Working with State Management Observable Store/observable-store-buttons/observable-store-buttons.component';
import { ObservableStoreComponent } from './lab2 Working with State Management Observable Store/observable-store/observable-store.component';
import { DataStore } from './lab2 Working with State Management Observable Store/state-management/observable-store/data.store';

@NgModule({
  declarations: [
    AppComponent,
    TryObservableServiceComponent,
    ObservableStoreComponent,
    ObservableStoreButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
