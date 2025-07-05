import { Component } from '@angular/core';
import { SingleFlowerComponent } from '../svg/single-flower/single-flower.component';

@Component({
  selector: 'app-introductions',
  standalone: true,
  imports: [SingleFlowerComponent],
  templateUrl: './introductions.component.html',
  styleUrl: './introductions.component.scss',
})
export class IntroductionsComponent {}
