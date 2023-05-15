import { Request, Response } from "express";
import { Student } from "../interfaces/student.interface";
import { StudentService } from "../services/student.service";

const studentService = new StudentService();

// Get all students
export const getAllStudents = (_: Request, res: Response): void => {
  const students = studentService.getAllStudents();

  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(students);
};

// Get student by id
export const getStudentById = (req: Request, res: Response): void => {
  if (!req?.params?.id) {
    res.setHeader("Content-Type", "application/json");
    res.status(400);
    res.send({
      error: "Student ID is missing",
    });
    return;
  }

  const studentId = parseInt(req?.params?.id);

  try {
    const student = studentService.getStudentById(studentId);

    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send(student);
  } catch (error: any) {
    res.setHeader("Content-Type", "application/json");
    res.status(500);
    res.send({
      error: error.message,
    });
  }
};

// Add new student
export const addStudent = (req: Request, res: Response): void => {
  if (!req.body) {
    res.setHeader("Content-Type", "application/json");
    res.status(400);
    res.send({
      error: "Student data is missing or invalid",
    });
    return;
  }

  const student: Student = req.body;

  try {
    const students = studentService.addStudent(student);

    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send(students);
  } catch (error: any) {
    res.setHeader("Content-Type", "application/json");
    res.status(500);
    res.send({
      error: error.message,
    });
  }
};

// Remove student by id
export const removeStudentById = (req: Request, res: Response): void => {
  if (!req?.params?.id) {
    res.status(400).send({
      error: "Student ID is missing",
    });
    return;
  }

  const studentId = parseInt(req?.params?.id);

  try {
    const students = studentService.removeStudentById(studentId);

    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send(students);
  } catch (error: any) {
    res.setHeader("Content-Type", "application/json");
    res.status(500);
    res.send({
      error: error.message,
    });
  }
};
