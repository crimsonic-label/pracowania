import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChopinComponent } from './chopin.component';

describe('ChopinComponent', () => {
  let component: ChopinComponent;
  let fixture: ComponentFixture<ChopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
