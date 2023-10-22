import { useState } from 'react';

export default function Contact() {
  return (
    <div>
      <h1>About Me</h1>
      <br></br>
      <h2>Contact Lyell Curtis</h2>

      {/* form with fields for a name, an email address, and a message */}

      const [firstName, setFirstName] = useState('');

      const [lastName, setLastName] = useState('');

      const [email, setEmail] = useState('');

      const [message, setMessage] = useState('');

    </div>
  );
}

const inputChange = (e) => {

  const { name, value } = e.target;
  const email = e.target;

  return name === 'firstName' ? setFirstName(value) : setLastName(value);
};

const handleFormSubmit = (e) => {

  e.preventDefault();

  alert(`Hello ${firstName} ${lastName} your message was sent by you email ${email}`);
  setFirstName('');
  setLastName('');
  setEmail('');
  setMessage('');
};

return (
  <div className="container text-center">
    <h1>
      Hello {firstName} {lastName}
    </h1>
    <form className="form" onSubmit={handleFormSubmit}>

      <input
        value={firstName}
        name="firstName"
        onChange={inputChange}
        type="text"
        placeholder="First Name"
      />
      
      <input
        value={lastName}
        name="lastName"
        onChange={inputChange}
        type="text"
        placeholder="Last Name"
      />

      <input
        value={email}
        name="email"
        onChange={inputChange}
        type="text"
        placeholder="Email"
      />

      <input
        value={message}
        name="message"
        onChange={inputChange}
        type="text"
        placeholder="Message"
      />

      <button type="submit">
        Submit Message
      </button>
    </form>
  </div>
);

