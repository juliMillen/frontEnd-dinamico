import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSobreMiComponent } from './dash-sobre-mi.component';

describe('DashSobreMiComponent', () => {
  let component: DashSobreMiComponent;
  let fixture: ComponentFixture<DashSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
