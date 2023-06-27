import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzemocComponent } from './przemoc.component';

describe('PrzemocComponent', () => {
  let component: PrzemocComponent;
  let fixture: ComponentFixture<PrzemocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzemocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzemocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
