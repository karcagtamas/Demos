import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nagybetus'
})
export class NagybetusPipe implements PipeTransform {

  transform(value: string, args: string): any {
    return value.toUpperCase() + args;
  }

}
