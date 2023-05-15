import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  popupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PopupComponent>
  ) {
    this.popupForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.popupForm.valid) {
      this.dialogRef.close({
        student: this.popupForm.value,
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
