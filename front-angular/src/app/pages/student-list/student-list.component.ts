import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Student } from '../../interfaces/student.interface';
import { StudentService } from '../../services/student.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  @ViewChild(MatTable) studentListMatTable!: MatTable<ElementRef>;

  students: Student[] = [];

  displayedColumns: string[] = ['id', 'name', 'age', 'sex', 'action'];

  constructor(
    private matDialog: MatDialog,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllStudents().subscribe({
      next: (response: any) => {
        this.students = response;

        this.studentListMatTable.renderRows();
      },
      error: (error) => {
        console.error('studentService getAllStudents subscribe error', error);
      },
    });
  }

  removeStudentById(id: number): void {
    this.studentService.removeStudentById(id).subscribe({
      next: (_: any) => {
        this.getAllStudent();
      },
      error: (error) => {
        console.error(
          'studentService removeStudentById subscribe error',
          error
        );
      },
    });
  }

  openPopup(): void {
    const dialogRef = this.matDialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (!result?.student) {
        throw new Error('Student data is missing');
      }

      const { student } = result;

      const newStudent: Student = {
        ...student,
      };

      this.studentService.addStudent(newStudent).subscribe({
        next: (_: any) => {
          this.getAllStudent();
        },
        error: (error) => {
          console.error('studentService addStudent subscribe error', error);
        },
      });
    });
  }
}
