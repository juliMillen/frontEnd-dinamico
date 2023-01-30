import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashExperienciaComponent } from './dash-experiencia.component';

describe('DashExperienciaComponent', () => {
  let component: DashExperienciaComponent;
  let fixture: ComponentFixture<DashExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
