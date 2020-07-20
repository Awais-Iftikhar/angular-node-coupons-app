import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcouponsComponent } from './listofcoupons.component';

describe('ListofcouponsComponent', () => {
  let component: ListofcouponsComponent;
  let fixture: ComponentFixture<ListofcouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofcouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
