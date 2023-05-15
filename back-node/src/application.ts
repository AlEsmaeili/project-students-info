import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { studentRoute } from "./routes/student.route";

const allowedOrigin = ["http://localhost:1200", "http://localhost:4200"];

export const application = () => {
  const app = express();

  app.use(
    cors({
      origin: allowedOrigin,
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Add cors middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.origin) {
      return res.status(400).json({
        error: "Origin header is missing from the request",
      });
    }
    const origin = req.headers.origin;

    if (allowedOrigin.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      next();
    }

    res.status(403).send("Access denied");
  });

  // Load student route
  app.use("/api/v1/main/student", studentRoute);

  return app;
};

export default { application };
