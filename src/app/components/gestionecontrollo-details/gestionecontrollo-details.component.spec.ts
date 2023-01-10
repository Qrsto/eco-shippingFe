import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionecontrolloDetailsComponent } from './gestionecontrollo-details.component';

describe('GestionecontrolloDetailsComponent', () => {
  let component: GestionecontrolloDetailsComponent;
  let fixture: ComponentFixture<GestionecontrolloDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionecontrolloDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionecontrolloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
