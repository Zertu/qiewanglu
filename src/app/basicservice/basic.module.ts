import { AddnewlinePipe } from './addnewline/addnewline.pipe';
import { html2markdown } from './htm2pipe/html2markdown.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[],
    declarations:[html2markdown,AddnewlinePipe],
    exports:[html2markdown,AddnewlinePipe]
})
export class basicModule {}