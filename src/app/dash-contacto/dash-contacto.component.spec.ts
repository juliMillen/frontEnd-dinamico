import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContactoComponent } from './dash-contacto.component';

describe('DashContactoComponent', () => {
  let component: DashContactoComponent;
  let fixture: ComponentFixture<DashContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
