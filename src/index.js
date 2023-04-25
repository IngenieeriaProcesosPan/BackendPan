import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rutas from "#routes/routes.js";  
dotenv.config();

const app = express();

// Cors
app.use(cors());

// Settings
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

//Routes
app.use(rutas);

//Starting the server
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
