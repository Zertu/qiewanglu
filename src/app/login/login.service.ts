import {Injectable}                 from '@angular/core'
import {Http, Response}             from '@angular/http'
import {Observable}                 from 'rxjs/Observable'
import {Headers, RequestOptions}    from '@angular/http'



import { User }                     from'./user';
import { USER }                     from'./mock-users.component';

@Injectable()
export class LoginService {
    constructor (){
    }
    login(members:any){
        for(let n of USER){
            if(members.email==n.email&&members.password==n.password){
                return true
            }
            return false               
        }        
    }
}

   