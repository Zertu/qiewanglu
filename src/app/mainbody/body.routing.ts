import { BroadcastComponent } from './broadcast/broadcast.component';
import { PoetryComponent } from './poetry/poetry.component';
import { PoemComponent } from './poem/poem.component';
import { EditorComponent } from './editor/editor.component';
import { PoemlistComponent } from './poemlist/poemlist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
export const bodyroutes: Routes = [
  { path: '', component: PoemlistComponent },
  { path: 'edit', component: EditorComponent },
  { path: 'poem', component: PoemComponent },
  { path: 'poetry', component: PoetryComponent },
  { path: 'broadcast', component: BroadcastComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(bodyroutes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
