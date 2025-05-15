import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShortener',
  standalone: true
})
export class TextShortenerPipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    if (!value) return '';
    if (value.length <= limit) return value;

    return value.slice(0, limit) + '...';
  }
}
