import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoktorLoginPage } from './doktor-login.page';

describe('DoktorLoginPage', () => {
  let component: DoktorLoginPage;
  let fixture: ComponentFixture<DoktorLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoktorLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoktorLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
