import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEducacionComponent } from './dash-educacion.component';

describe('DashEducacionComponent', () => {
  let component: DashEducacionComponent;
  let fixture: ComponentFixture<DashEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
