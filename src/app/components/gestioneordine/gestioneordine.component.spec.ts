import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneordineComponent } from './gestioneordine.component';

describe('GestioneordineComponent', () => {
  let component: GestioneordineComponent;
  let fixture: ComponentFixture<GestioneordineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneordineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneordineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
