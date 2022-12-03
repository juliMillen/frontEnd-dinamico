import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbannerComponent } from './dashbanner.component';

describe('DashbannerComponent', () => {
  let component: DashbannerComponent;
  let fixture: ComponentFixture<DashbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
