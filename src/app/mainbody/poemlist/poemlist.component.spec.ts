/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoemlistComponent } from './poemlist.component';

describe('PoemlistComponent', () => {
  let component: PoemlistComponent;
  let fixture: ComponentFixture<PoemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});