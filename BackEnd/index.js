import express from "express";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("get location Backend running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
