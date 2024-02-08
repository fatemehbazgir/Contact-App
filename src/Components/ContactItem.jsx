function ContactItem({ data: { name, lastName, email, phone } }) {
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
        <button>🗑</button>
      </li>
    </div>
  );
}

export default ContactItem;
