const { exec } = require("child_process");
const express = require("express");
const app = express();

app.get("/run", (req, res) => {
  const name = req.query.name;

  exec(`echo Hello ${name}`, (err, stdout, stderr) => {
    if (err) {
      res.status(500).send("Error occurred");
      return;
    }
    res.send(`Result: ${stdout}`);
  });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
