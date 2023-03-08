import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  employeeType: String[] = [
    'Full-Time',
    'Contract-Basis',
    'Part-Time',
    'Other',
  ];

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      employeeType: '',
      designation: '',
      yearsOfExperience: '',
      expectedSalary: '',
    });
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }
}
