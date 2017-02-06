import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addnewline'
})
export class AddnewlinePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log(value.split('\n').map(e => {
      return e.trim()
    }))
    return value.split('\n').map(e => {
      return e.trim()
    }).join('<br/>')
  }
}