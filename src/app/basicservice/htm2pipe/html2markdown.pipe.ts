import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
let markdown = require("markdown").markdown;

@Pipe({
  name: 'html2markdown'
})
export class html2markdown implements PipeTransform, SafeHtml {
  constructor(private domSanitizer:DomSanitizer){}
  transform(value: any, args?: any): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(markdown.toHTML(value))
  }

}