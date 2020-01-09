import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HastaLoginPage } from './hasta-login.page';

describe('HastaLoginPage', () => {
  let component: HastaLoginPage;
  let fixture: ComponentFixture<HastaLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastaLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HastaLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
