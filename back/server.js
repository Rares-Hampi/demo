require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoute");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("App listen on port", process.env.PORT);
});
