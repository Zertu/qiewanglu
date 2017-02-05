import { POEMS } from './poems';
import { Poemdata } from '../poemdata';
import { Injectable } from '@angular/core';
@Injectable()
export class GetpoemsService {

constructor() { }
    getpoemlist():Poemdata[]{
        return POEMS
    }
    getsingel():Poemdata{
        return 
    }
}