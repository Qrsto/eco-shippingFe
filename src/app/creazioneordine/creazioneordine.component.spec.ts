import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneordineComponent } from './creazioneordine.component';

describe('CreazioneordineComponent', () => {
  let component: CreazioneordineComponent;
  let fixture: ComponentFixture<CreazioneordineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreazioneordineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreazioneordineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
