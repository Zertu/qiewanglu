/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoetryComponent } from './poetry.component';

describe('PoetryComponent', () => {
  let component: PoetryComponent;
  let fixture: ComponentFixture<PoetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});