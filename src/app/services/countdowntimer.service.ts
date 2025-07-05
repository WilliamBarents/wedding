import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { Timer } from '../models/timer.model';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private weddingDate = new Date('2026-01-24T00:00:00');
  private timerSubject = new BehaviorSubject<Timer>(
    this.calculateRemainingTime()
  );
  timer$ = this.timerSubject.asObservable();
  private subscription: Subscription | null = null;

  constructor(private ngZone: NgZone) {}

  start() {
    if (this.subscription) return;

    // Run interval outside Angular to avoid triggering CD too often
    this.ngZone.runOutsideAngular(() => {
      this.subscription = interval(1000).subscribe(() => {
        const remaining = this.calculateRemainingTime();

        // Back inside Angular zone to update BehaviorSubject and trigger CD
        this.ngZone.run(() => {
          this.timerSubject.next(remaining);

          if (
            remaining.days === 0 &&
            remaining.hours === 0 &&
            remaining.minutes === 0 &&
            remaining.seconds === 0
          ) {
            this.stop();
          }
        });
      });
    });
  }

  stop() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }

  getWeddingDate(): Date {
    return this.weddingDate;
  }

  private calculateRemainingTime(): Timer {
    const now = new Date();
    const diffMs = this.weddingDate.getTime() - now.getTime();

    if (diffMs <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }
}
