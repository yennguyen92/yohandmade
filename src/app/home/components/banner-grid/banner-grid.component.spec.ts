/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerGridComponent } from './banner-grid.component';

describe('BannerGridComponent', () => {
  let component: BannerGridComponent;
  let fixture: ComponentFixture<BannerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
