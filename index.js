require("dotenv").config();
import express from "express";
import cors from "cors";
import "./Services/db.js";
import Register from "./Features/RegisterUser/RouteRegister.js";
import LogginUser from "./Features/LoginUser/RouteLoggin.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World Priyanka ");
});

app.use("/Register", Register);
app.use("/LogginUser", LogginUser);

app.listen(process.env.PORT, () => {
  console.log(" Running on the localhost:8085", process.env.PORT);
});
