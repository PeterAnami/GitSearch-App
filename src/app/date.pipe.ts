import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";

@Pipe({ name: "customDateFormat" })
export class CustomDateFormat implements PipeTransform {
  transform(value: any): Date {
    var customDate = new Date(value.match(/\d+/)[0] * 1);
    return customDate;
  }
}