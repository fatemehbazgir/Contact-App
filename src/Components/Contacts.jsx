import { useState } from "react";
import inputs from "../Constants/inputs";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));

  };

  return (
    <div>
      <div>
        {inputs.map((input,index) => (
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
            key={index}
          />
        ))}
        <button>Add Contact</button>
      </div>
    </div>
  );
}

export default Contacts;
