import { Student } from "../interfaces/student.interface";

export class StudentService {
  students: Student[] = [
    { id: 1, name: "ali", age: 33, sex: 1 },
    { id: 2, name: "eli", age: 23, sex: 2 },
    { id: 3, name: "reza", age: 35, sex: 1 },
    { id: 4, name: "shima", age: 45, sex: 2 },
  ];

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student {
    const existingStudent = this.students.find(
      (object: Student) => object.id === id
    );

    if (!existingStudent) {
      throw new Error(`Student ID is invalid`);
    }

    return existingStudent;
  }

  addStudent(student: Omit<Student, "id">): Student[] {
    const randomId = Math.floor(Math.random() * 100) + 1;
    const newStudent: Student = {
      id: randomId,
      ...student,
    };

    this.students.push(newStudent);
    return this.students;
  }

  removeStudentById(id: number): Student[] {
    const studentIndex = this.students.findIndex((object) => object.id === id);

    if (studentIndex === -1) {
      throw new Error(`Student ID is not found`);
    }

    this.students.splice(studentIndex, 1);
    return this.students;
  }
}
