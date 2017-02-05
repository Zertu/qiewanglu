import { html2markdown } from './htm2pipe/html2markdown.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[],
    declarations:[html2markdown],
    exports:[html2markdown]
})
export class basicModule {}