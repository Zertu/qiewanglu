import { GetpoemsService } from './../getpoems.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poemlist',
  templateUrl: './poemlist.component.html',
  styleUrls: ['./poemlist.component.scss'],
  providers:[GetpoemsService]
})
export class PoemlistComponent implements OnInit {

  constructor(
    private GetpoemsService : GetpoemsService
  ) { }

  ngOnInit() {
  }
  poemslist=this.GetpoemsService.getpoemlist()
}