import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
app.use(bodyParser.json());

app.get("/api/:jsonFile", (req, res) => {
  {
    fs.readFile(
      `../public/${req.params.jsonFile}.json`,
      "utf8",
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          res.json(JSON.parse(data));
        }
      },
    );
  }
});

app.use(express.static("../dist"));

app.listen(process.env.PORT || 3000);
