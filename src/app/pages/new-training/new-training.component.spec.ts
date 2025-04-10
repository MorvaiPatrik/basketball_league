import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTrainingComponent } from './new-training.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewTrainingComponent', () => {
  let component: NewTrainingComponent;
  let fixture: ComponentFixture<NewTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTrainingComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled', () => {
    component.newTrainingForm.controls['trainingName'].setValue('Új edzés');
    component.newTrainingForm.controls['trainingDate'].setValue('2025-04-10');

    expect(component.newTrainingForm.valid).toBeTruthy();
  });

  it('should call submitForm on form submit', () => {
    spyOn(component, 'submitForm');

    component.newTrainingForm.controls['trainingName'].setValue('Új edzés');
    component.newTrainingForm.controls['trainingDate'].setValue('2025-04-10');

    fixture.nativeElement.querySelector('button[type="submit"]').click();

    expect(component.submitForm).toHaveBeenCalled();
  });
});
