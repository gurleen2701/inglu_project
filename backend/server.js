const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let contacts = []; // In-memory DB

// GET all contacts
app.get("/contacts", (req, res) => {
  res.json(contacts);
});

al but good)
app.put("/contacts/:id", (req, res) => {
  contacts = contacts.map(c =>
    c.id === req.params.id ? { ...c, ...req.body } : c
  );
  res.json({ message: "Updated" });
});

app.get("/", (req, res) => {
  res.send("API Running...");
});

