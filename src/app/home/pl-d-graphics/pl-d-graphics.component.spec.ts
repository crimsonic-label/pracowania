import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlDGraphicsComponent } from './pl-d-graphics.component';

describe('PlDGraphicsComponent', () => {
  let component: PlDGraphicsComponent;
  let fixture: ComponentFixture<PlDGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlDGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlDGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
