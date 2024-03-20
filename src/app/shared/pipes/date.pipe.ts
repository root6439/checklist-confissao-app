import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  transform(value: Date): string {
    return `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
  }
}
