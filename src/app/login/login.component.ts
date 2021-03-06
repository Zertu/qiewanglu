import {Component} from '@angular/core'
import { User }            from'./user';
import {LoginService}      from './login.service'


@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers:[LoginService]
})
export class LoginComponent  {

    constructor(
        private loginService: LoginService
    ){}

    public user = new User('','');


    login(){
        let result=this.loginService.login(this.user)
        alert(result?'success':'failure');
    }

 /*   get userInfo() {
            return JSON.stringify(this.user);
        }
  */ 
  

}
