import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { basicModule } from './../basicservice/basic.module';
import { RouterModule } from '@angular/router';
import { PoetryComponent } from './poetry/poetry.component';
import { PoemlistComponent } from './poemlist/poemlist.component';
import { EditorComponent } from './editor/editor.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { MainbodyComponent } from './mainbody.component';
// Angular Imports
import { NgModule } from '@angular/core';
import { ShowfullarticleDirective } from './showfullarticle.directive';
import { PoetComponent } from './poet/poet.component';

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        basicModule,
        BrowserModule
    ],
    declarations: [
        MainbodyComponent,
        BroadcastComponent,
        EditorComponent,
        PoemlistComponent,
        PoetryComponent,
        ShowfullarticleDirective,
        PoetComponent
    ],
    exports: [
        MainbodyComponent,
    ]
})
export class MainbodyModule {

}
