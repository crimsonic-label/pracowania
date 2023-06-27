import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderlessComponent } from './borderless.component';

describe('BorderlessComponent', () => {
  let component: BorderlessComponent;
  let fixture: ComponentFixture<BorderlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
