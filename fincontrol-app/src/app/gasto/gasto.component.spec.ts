/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GastoComponent } from './gasto.component';

describe('GastoComponent', () => {
  let component: GastoComponent;
  let fixture: ComponentFixture<GastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
