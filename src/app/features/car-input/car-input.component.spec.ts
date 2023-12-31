import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarInputComponent } from './car-input.component';

describe('CarInputComponent', () => {
  let component: CarInputComponent;
  let fixture: ComponentFixture<CarInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
