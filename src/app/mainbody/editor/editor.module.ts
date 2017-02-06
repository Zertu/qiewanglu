// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { EditorComponent } from './editor.component';
import { PoemlistComponent } from '../poemlist/poemlist.component';

@NgModule({
    imports: [

    ],
    declarations: [
        EditorComponent,,
    PoemlistComponent
],
    exports: [
        EditorComponent,
    ]
})
export class EditorModule {

}
