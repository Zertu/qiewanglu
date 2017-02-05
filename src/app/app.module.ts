import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component'
import { basicModule } from './basicservice/basic.module'
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditorComponent,
    HeaderComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    basicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
