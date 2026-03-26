import { deleteContact } from "../services/api";

function ContactList({ contacts, refresh }) {
  return (
    <div>
      {contacts.map((c) => (
        <div key={c.id}>
          <p>
            {c.name} | {c.email} | {c.phone}
          </p>
          <button
            onClick={async () => {
              await deleteContact(c.id);
              refresh();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;