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

// ADD contact
app.post("/contacts", (req, res) => {
  const newContact = {
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };

  contacts.push(newContact);
  res.json(newContact);
});

// DELETE contact
app.delete("/contacts/:id", (req, res) => {
  contacts = contacts.filter(c => c.id !== req.params.id);
  res.json({ message: "Deleted" });
});

// UPDATE contact (optional but good)
app.put("/contacts/:id", (req, res) => {
  contacts = contacts.map(c =>
    c.id === req.params.id ? { ...c, ...req.body } : c
  );
  res.json({ message: "Updated" });
});

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(5000, () => console.log("Server running on port 5000"));