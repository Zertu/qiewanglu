import { PoetComponent } from './poet/poet.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { PoetryComponent } from './poetry/poetry.component';
import { EditorComponent } from './editor/editor.component';
import { PoemlistComponent } from './poemlist/poemlist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
export const bodyroutes: Routes = [
  { path: '', component: PoemlistComponent },
  { path: 'edit', component: EditorComponent },
  { path: 'poet', component: PoetComponent },
  { path: 'poetry', component: PoetryComponent },
  { path: 'broadcast', component: BroadcastComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(bodyroutes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
