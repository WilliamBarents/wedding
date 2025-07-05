import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataFormatterService {
  constructor() {}

  formatDate(date: Date | string, format: 'full' | 'short'): string {
    const d = new Date(date);

    if (format === 'full') {
      return d.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } else if (format === 'short') {
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}.${month}.${year}`;
    }

    return '';
  }
}
