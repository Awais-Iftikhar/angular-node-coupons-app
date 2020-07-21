import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupondetailComponent } from './coupondetail.component';

describe('CoupondetailComponent', () => {
  let component: CoupondetailComponent;
  let fixture: ComponentFixture<CoupondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
