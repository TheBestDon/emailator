const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hi: "there" });
});

const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
  console.log(`Servet is listening on port ${PORT}`);
});
