import { Component } from '@angular/core';
import { BannerComponent } from '../../components/home/banner/banner.component';
import { IntroductionsComponent } from '../../components/home/introductions/introductions.component';
import { DateComponent } from '../../components/home/date/date.component';
import { BrideGroomComponent } from '../../components/home/bride-groom/bride-groom.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    IntroductionsComponent,
    DateComponent,
    BrideGroomComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
