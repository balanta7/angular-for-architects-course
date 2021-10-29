import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private observableSubject$ = new Subject<string>();
  private texts = ['Congratulations!', 'This is an observable service.', 'Good job solving this lab.'];

  public observable$ = this.observableSubject$.asObservable();

  public sendSomeData(): void {
    this.observableSubject$.next(this.texts[Math.floor(Math.random() * this.texts.length)]);
  }
}
