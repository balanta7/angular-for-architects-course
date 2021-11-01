import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ObservableService } from '../observable.service';
import { tap, retry, share } from 'rxjs/operators';

@Component({
  selector: 'app-try-observable-service',
  templateUrl: './try-observable-service.component.html',
  styleUrls: ['./try-observable-service.component.scss']
})
export class TryObservableServiceComponent implements OnInit, OnDestroy {
  public displayedText = '';

  private subscriptions = new Subscription();

  constructor(private observableService: ObservableService) { }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.observableService.observable$
        .subscribe((text) => 
          this.displayedText = text
        )
    );

    this.subscriptions.add(
      timer(1,2000).pipe(
        tap(() => this.observableService.sendSomeData()),
      ).subscribe()
    );
  }
}
