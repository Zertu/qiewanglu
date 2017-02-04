import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
