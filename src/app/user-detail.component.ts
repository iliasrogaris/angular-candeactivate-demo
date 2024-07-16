import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ComponentCanDeactivate } from './can-deactivate.guard';

@Component({
  selector: 'app-user-detail',
  template: `
    User Detail Page
    <form [formGroup]="formGroup" style="display: flex; flex-direction: column;">
      <mat-form-field>
        <input matInput formControlName="name" placeholder="enter text here, and click the back button" />
        <mat-error *ngIf="formGroup.controls.name.errors?.required">Field invalid</mat-error>
      </mat-form-field>
      <button mat-raised-button color="primary" type="submit">Submit</button>
    </form>
  `,
})
export class UserDetailComponent implements ComponentCanDeactivate {

  readonly formGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  constructor(
    readonly formBuilder: FormBuilder,
  ) {
  }

  canDeactivate() {
    return !this.formGroup.dirty;
  }

}
