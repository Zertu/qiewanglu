import { Pipe, PipeTransform } from '@angular/core';
let markdown = require( "markdown" ).markdown;

@Pipe({
  name: 'html2markdown'
})
export class html2markdown implements PipeTransform {

  transform(value: any, args?: any): any {
    return markdown.toHTML(value);
  }

}