import { Component, OnDestroy, OnInit } from '@angular/core';
import { Timer } from '../../../models/timer.model';
import { Subscription } from 'rxjs';
import { CountdownService } from '../../../services/countdowntimer.service';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  timer: Timer | null = null;
  private sub: Subscription | null = null;

  constructor(private countdownService: CountdownService) {}

  ngOnInit() {
    this.countdownService.start();
    this.sub = this.countdownService.timer$.subscribe((timer) => {
      this.timer = timer;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.countdownService.stop();
  }
}
