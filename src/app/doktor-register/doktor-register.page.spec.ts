import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoktorRegisterPage } from './doktor-register.page';

describe('DoktorRegisterPage', () => {
  let component: DoktorRegisterPage;
  let fixture: ComponentFixture<DoktorRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoktorRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoktorRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
