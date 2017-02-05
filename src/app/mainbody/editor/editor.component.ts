import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'editor',
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.scss']
})
export class EditorComponent  {
    constructor() { }
    poem: string = ''
}
