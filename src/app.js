require("dotenv").config();
const express = require("express");
const cors = require("cors");
const classifyRoute = require("./routes/classifyRoute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", classifyRoute);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
