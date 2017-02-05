import { EditorComponent } from './editor/editor.component';
import { PoemlistComponent } from './poemlist/poemlist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
export const bodyroutes: Routes = [
  { path: '', component: PoemlistComponent },
  { path: 'edit', component: EditorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(bodyroutes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
