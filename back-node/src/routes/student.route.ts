import express, { Router } from "express";
import {
  addStudent,
  getAllStudents,
  getStudentById,
  removeStudentById,
} from "../controllers/student.controller";

export const studentRoute: Router = express.Router();

studentRoute.get("/getAllStudents", getAllStudents);
studentRoute.get("/getStudentById/:id", getStudentById);
studentRoute.post("/addStudent", addStudent);
studentRoute.delete("/removeStudentById/:id", removeStudentById);
