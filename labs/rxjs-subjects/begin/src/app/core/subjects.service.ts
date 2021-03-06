import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  
  //Define Subject and Observable properties here
  subject$: Subject<string>;
  behaviorSubject$: BehaviorSubject<string>;
  observable$: Observable<string>;

  constructor() {
    this.init();
  }

  init() {
    // Create Subject and Observable Here 
    this.subject$ = new Subject<string>();
    // this.observable$ = this.subject$.asObservable();
    this.behaviorSubject$ = new BehaviorSubject<string>('initial');
    this.observable$ = this.behaviorSubject$.asObservable();

    // Create interval here
    setInterval(() => {
      const date = new Date();

      // Place the following code on a single line when adding it 
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      
      // this.subject$.next(time);
      this.behaviorSubject$.next(time);
    }, 3000);
  }

}
