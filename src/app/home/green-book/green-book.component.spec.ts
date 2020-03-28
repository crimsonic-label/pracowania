import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBookComponent } from './green-book.component';

describe('GreenBookComponent', () => {
  let component: GreenBookComponent;
  let fixture: ComponentFixture<GreenBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
