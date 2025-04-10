import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  newTrainingForm: FormGroup;

  constructor(private router: Router) {
    this.newTrainingForm = new FormGroup({
      trainingName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      trainingDate: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void { }

  submitForm(): void {
    if (this.newTrainingForm.invalid) {
      return;
    }

    const newTraining = this.newTrainingForm.value;
    console.log('New Training:', newTraining);

    this.router.navigate(['/my-tasks']);
  }
}
