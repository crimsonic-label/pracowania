import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CzeresnieComponent } from './czeresnie.component';

describe('CzeresnieComponent', () => {
  let component: CzeresnieComponent;
  let fixture: ComponentFixture<CzeresnieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CzeresnieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CzeresnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
