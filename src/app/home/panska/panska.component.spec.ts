import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanskaComponent } from './panska.component';

describe('PanskaComponent', () => {
  let component: PanskaComponent;
  let fixture: ComponentFixture<PanskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
