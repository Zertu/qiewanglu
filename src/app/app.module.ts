import { PoemlistComponent } from './mainbody/poemlist/poemlist.component';
import { BodyRoutingModule } from './mainbody/body.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { EditorComponent } from './mainbody/editor/editor.component'
import { basicModule } from './basicservice/basic.module'
import { HeaderComponent } from './header/header.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditorComponent,
    HeaderComponent,
    MainbodyComponent,
    PoemlistComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    basicModule,
    BodyRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
