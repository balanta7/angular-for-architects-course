import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TryObservableServiceComponent } from './lab1/try-observable-service/try-observable-service.component';
import { ObservableStoreComponent } from './lab2/observable-store/observable-store.component';
import { DataStore } from './lab2/state-management/observable-store/data.store';
import { ObservableStoreButtonsComponent } from './lab2/observable-store-buttons/observable-store-buttons.component';

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
