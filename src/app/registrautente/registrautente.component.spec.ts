import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrautenteComponent } from './registrautente.component';

describe('RegistrautenteComponent', () => {
  let component: RegistrautenteComponent;
  let fixture: ComponentFixture<RegistrautenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrautenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrautenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
