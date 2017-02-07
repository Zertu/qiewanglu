import { Poemdata } from './../../poemdata';
import { GetpoemsService } from './../getpoems.service';
import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-poemlist',
  templateUrl: './poemlist.component.html',
  styleUrls: ['./poemlist.component.scss'],
  providers: [GetpoemsService]
})
export class PoemlistComponent implements OnInit,AfterViewInit {
  constructor(
    private GetpoemsService: GetpoemsService
  ) { }
  poemslist: Poemdata[]
  ngOnInit() {
    this.poemslist = this.GetpoemsService.getPoemlist()
  }
  ngAfterViewInit(){

  }
  showall(a){
    console.log(a)
  }
}