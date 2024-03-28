import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterreservationComponent } from './ajouterreservation.component';

describe('AjouterreservationComponent', () => {
  let component: AjouterreservationComponent;
  let fixture: ComponentFixture<AjouterreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterreservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
