import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HastaRegisterPage } from './hasta-register.page';

describe('HastaRegisterPage', () => {
  let component: HastaRegisterPage;
  let fixture: ComponentFixture<HastaRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastaRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HastaRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
