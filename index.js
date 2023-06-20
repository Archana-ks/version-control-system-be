require("dotenv").config();
const express = require("express");
const db = require("./db/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const repoRoutes = require("./routes/repo");

const { isAuth } = require("./middlewares/auth");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome!!!");
});

app.use("/", authRoutes);
app.use("/", isAuth, userRoutes);
app.use("/repo", isAuth, repoRoutes);

//Connecting DB
db();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
