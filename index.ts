"use strict";

import express, { urlencoded } from "express";
import router from "./routes";

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`App listen on Port: ${PORT}`);
});
