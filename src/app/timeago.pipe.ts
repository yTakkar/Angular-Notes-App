import { Pipe, PipeTransform } from '@angular/core';
import TimeAgo from 'handy-timeago';

@Pipe({
  name: 'timeago'
})

export class TimeagoPipe implements PipeTransform {

  transform(time: Number, args?: any): any {
    return TimeAgo(time);
  }

}
