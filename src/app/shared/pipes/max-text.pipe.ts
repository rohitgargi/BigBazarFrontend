import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxText'
})
export class MaxTextPipe implements PipeTransform {

  transform(value: string, maxValue:number): unknown {
    if(value.length >maxValue){
      return value.trim().substring(0,maxValue) + "..."
    }
    return value;
  }

}
