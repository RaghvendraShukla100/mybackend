import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
// CONNECT DATABASE
connectDB();

// MIDDLEWARE
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.use("/api/users", userRoutes);

// ERROR HANDELING
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listening at PORT ${PORT}`);
});
