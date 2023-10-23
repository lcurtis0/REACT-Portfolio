import { useState } from 'react';

function Contact() {

  {/* form with fields for a name, an email address, and a message */ }

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  const nameInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const emailInput = (e) => {
    const {email, value} = e.target;

    return email === setEmail(value);
  }

  const messageInput = (e) => {
    const {message, value} = e.target;

    return message === setMessage(value);
  }

  const handleFormSubmit = (e) => {

    e.preventDefault();

    alert(`Hello ${firstName} ${lastName} your message was sent by your email: ${email}`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact</h1>
      <hr></hr>

      <h2>Feel free to reach out</h2>
      <div className="container text-center">
        <h3>
          Hello... {firstName} {lastName}
        </h3>
        <form className="form" onSubmit={handleFormSubmit}>

          <input
            value={firstName}
            name="firstName"
            onChange={nameInputChange}
            type="text"
            placeholder="First Name"
          />

          <input
            value={lastName}
            name="lastName"
            onChange={nameInputChange}
            type="text"
            placeholder="Last Name"
          />

          <input
            value={email}
            name="email"
            onChange={emailInput}
            type="text"
            placeholder="Email"
          />

          <input className='Message'
            value={message}
            name="message"
            onChange={messageInput}
            type="text"
            placeholder="Message"
          />

          <button type="submit">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
