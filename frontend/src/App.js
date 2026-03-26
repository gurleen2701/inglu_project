import { useEffect, useState } from "react";
import { getContacts } from "./services/api";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <ContactList contacts={contacts} refresh={fetchContacts} />
    </div>
  );
}

export default App;
