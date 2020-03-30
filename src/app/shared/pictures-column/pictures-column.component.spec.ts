import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesColumnComponent } from './pictures-column.component';

describe('PicturesColumnComponent', () => {
  let component: PicturesColumnComponent;
  let fixture: ComponentFixture<PicturesColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturesColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
