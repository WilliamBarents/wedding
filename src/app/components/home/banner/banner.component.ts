import { Component, OnDestroy, OnInit } from '@angular/core';
import { Timer } from '../../../models/timer.model';
import { Subscription } from 'rxjs';
import { CountdownService } from '../../../services/countdowntimer.service';
import { HeaderComponent } from '../header/header.component';
import { FlowerComponent } from '../svg/flower/flower.component';
import { DataFormatterService } from '../../../services/data-formatter.service';

@Component({
  selector: 'app-banner',
  imports: [HeaderComponent, FlowerComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
  constructor(
    private countdownService: CountdownService,
    private dataFormatter: DataFormatterService
  ) {}

  ngOnInit() {}

  get getWeddingDate() {
    const date = this.countdownService.getWeddingDate();
    return this.dataFormatter.formatDate(date, 'short');
  }

  ngOnDestroy() {}
}
