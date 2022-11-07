import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckersListComponent } from './checkers-list.component';

describe('CheckersListComponent', () => {
  let component: CheckersListComponent;
  let fixture: ComponentFixture<CheckersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
