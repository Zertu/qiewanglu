import { potery } from './../potery';
import { Poet } from './../poet';
import { POEMS } from './poems';
import { Poemdata } from '../poemdata';
import { Injectable } from '@angular/core';
@Injectable()
export class GetpoemsService {

    constructor() { }
    getPoemlist(): Poemdata[] {
        return POEMS
    }
    getSingle(): Poemdata {
        return
    }
    getPoets(): Poet[] {
        return [{
            name: 'string',
            imghead: 'http://i2.hdslb.com/bfs/face/fd33548769c9bacfd7427c1d7ce3f95f0eb5cd21.jpg@75Q.webp',
            poetry: 3,
            poemnumber:321,
            commits: 2,
            viewnumber: 3
        }]
    }
    getPoterys():potery[]{
        return []
    }
}
