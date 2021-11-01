import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectsService } from './core/subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription1Data = [];
  subscription2Data = [];
  subscription3Data = [];

  private subscripitons = new Subscription();

  constructor(private subjectsService : SubjectsService ) {}

  ngOnDestroy(): void {
    this.subscripitons.unsubscribe();
  }

  ngOnInit() {}

  subscribe1() {
    this.subscripitons.add(
      this.subjectsService.observable$.subscribe(
        (data) => this.subscription1Data.push(data)
      )
    );
  }

  subscribe2() {
    this.subscripitons.add(
      this.subjectsService.observable$.subscribe(
        (data) => this.subscription2Data.push(data)
      )
    );
  }

  subscribe3() {
    this.subscripitons.add(
      this.subjectsService.observable$.subscribe(
        (data) => this.subscription3Data.push(data)
      )
    );
  }


}
