import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrsComponent } from './fomrs.component';

describe('FomrsComponent', () => {
  let component: FomrsComponent;
  let fixture: ComponentFixture<FomrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FomrsComponent]
    });
    fixture = TestBed.createComponent(FomrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
