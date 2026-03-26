import { useState } from "react";
import { addContact } from "../../services/api";

function ContactForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) return alert("Name required");

    await addContact(form);
    setForm({ name: "", email: "", phone: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <button>Add Contact</button>
    </form>
  );
}

export default ContactForm;