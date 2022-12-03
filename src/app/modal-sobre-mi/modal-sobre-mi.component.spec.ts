import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSobreMiComponent } from './modal-sobre-mi.component';

describe('ModalSobreMiComponent', () => {
  let component: ModalSobreMiComponent;
  let fixture: ComponentFixture<ModalSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
