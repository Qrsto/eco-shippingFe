import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoutenteComponent } from './accessoutente.component';

describe('AccessoutenteComponent', () => {
  let component: AccessoutenteComponent;
  let fixture: ComponentFixture<AccessoutenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoutenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
