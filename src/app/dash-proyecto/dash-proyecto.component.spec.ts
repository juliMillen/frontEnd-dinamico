import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProyectoComponent } from './dash-proyecto.component';

describe('DashProyectoComponent', () => {
  let component: DashProyectoComponent;
  let fixture: ComponentFixture<DashProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
