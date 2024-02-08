function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <div>
      <li>
        <p>
          {name}
          {lastName}
        </p>
        <p>
          <span>📬</span>
          {email}
        </p>
        <p>
          <span>📞</span>
          {phone}
        </p>
        <button onClick={() => deleteHandler(id)}>🗑</button>
      </li>
    </div>
  );
}

export default ContactItem;
