import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHabilidadesComponent } from './dash-habilidades.component';

describe('DashHabilidadesComponent', () => {
  let component: DashHabilidadesComponent;
  let fixture: ComponentFixture<DashHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
