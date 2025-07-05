import { Component, Input } from '@angular/core';
import { SingleFlower2Component } from '../svg/single-flower-2/single-flower-2.component';
import { CountdownService } from '../../../services/countdowntimer.service';
import { Timer } from '../../../models/timer.model';
import { Subscription } from 'rxjs';
import { DataFormatterService } from '../../../services/data-formatter.service';

@Component({
  selector: 'app-date',
  imports: [SingleFlower2Component],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
  standalone: true,
})
export class DateComponent {
  timer: Timer | null = null;
  private sub: Subscription | null = null;

  constructor(
    private countdownService: CountdownService,
    private dataFormatter: DataFormatterService
  ) {}

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

  get weddingDateString(): string {
    const date = this.countdownService.getWeddingDate();
    return this.dataFormatter.formatDate(date, 'full');
  }
}
