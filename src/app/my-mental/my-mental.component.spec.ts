import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMentalComponent } from './my-mental.component';

describe('MyMentalComponent', () => {
  let component: MyMentalComponent;
  let fixture: ComponentFixture<MyMentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
