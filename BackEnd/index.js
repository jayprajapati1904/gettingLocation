import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();
app.use(
  cors({
    origin: [
      "https://getting-location-osw3.vercel.app",
      "http://localhost:5173",
    ], // Allow the frontend's origin
    credentials: true, // Allow cookies/credentials
  })
);
app.use(express.json());

// Routes
app.use("/api/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("get location Backend running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
