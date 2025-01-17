import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat',
  standalone: true,
})
export class DateformatPipe implements PipeTransform {

  private readonly monthMap: { [key: string]: string } = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };

  transform(value: String | null): String {
    if (!value) {
      return '';
    }

    // Match the format "day month, year"
    const datePattern = /^(\d{1,2})\s([A-Za-z]{3}),\s(\d{4})$/;
    const match = value.match(datePattern);

    if (!match) {
      return value; // Return the original value if it doesn't match the expected format
    }

    const day = match[1].padStart(2, '0'); // Ensure two digits for the day
    const month = this.monthMap[match[2]];
    const year = match[3];

    if (!month) {
      return value; // Return the original value if the month is invalid
    }

    return `${day}/${month}/${year}`;
  }

}
