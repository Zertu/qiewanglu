import { MainbodyModule } from './mainbody/mainbody.module';
import { BodyRoutingModule } from './mainbody/body.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BodyRoutingModule,
    MainbodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
