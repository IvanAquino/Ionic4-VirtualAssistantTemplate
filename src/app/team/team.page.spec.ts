import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPage } from './team.page';

describe('TeamPage', () => {
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
