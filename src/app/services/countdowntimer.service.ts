import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { Timer } from '../models/timer.model';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private readonly weddingDate = new Date('2026-01-24T00:00:00');
  private timerSubject = new BehaviorSubject<Timer>(
    this.calculateRemainingTime()
  );
  timer$ = this.timerSubject.asObservable();

  private subscription: Subscription | null = null;

  start() {
    if (this.subscription) return; // already running

    this.subscription = interval(1000).subscribe(() => {
      const remaining = this.calculateRemainingTime();
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
  }

  stop() {
    this.subscription?.unsubscribe();
    this.subscription = null;
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
