import { Poet } from './../../poet';
import { GetpoemsService } from './../getpoems.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poet',
  templateUrl: './poet.component.html',
  styleUrls: ['./poet.component.scss'],
  providers:[GetpoemsService]
})
export class PoetComponent implements OnInit {
  constructor(
    private Getpoet : GetpoemsService
  ) { }
  Poets:Poet[]
  ngOnInit() {
    this.Poets=this.Getpoet.getPoets()
  }

}