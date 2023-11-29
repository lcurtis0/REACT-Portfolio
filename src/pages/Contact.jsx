import { useState } from 'react';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const nameInputChange = (e) => {
    const { name, value } = e.target;
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const emailInput = (e) => {
    const { email, value } = e.target;

    return email === setEmail(value);

  }

  const messageInput = (e) => {
    const { message, value } = e.target;

    return message === setMessage(value);
  }

  const handleFormSubmit = (e) => {

    if (firstName.length === 0 && lastName.length === 0) {
      alert("Please enter at least one of the name inputs")
      return false;
    } else if (email.length === 0) {
      alert("Please enter an email")
      return false;
    } else if (message.length === 0) {
      alert("Please enter a message")
      return false;
    } else {
      e.preventDefault();

      alert(`Hello ${firstName} ${lastName} your message was sent by your email: ${email}`);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      return true;
    }


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

          <ul className="list-group">
            <li>

          <input
            value={firstName}
            name="firstName"
            onChange={nameInputChange}
            type="text"
            placeholder="First Name"
          />
          </li>

          <li>

          <input
            value={lastName}
            name="lastName"
            onChange={nameInputChange}
            type="text"
            placeholder="Last Name"
          />

          </li>

          <li>

          <input
            value={email}
            name="email"
            onChange={emailInput}
            type="text"
            placeholder="Email"
          />

          </li>


          </ul>

<ul className="list-group">
          <li>

          <textarea className='Message'
            value={message}
            name="message"
            onChange={messageInput}
            type="text"
            placeholder="Message"
          />

          </li>

          </ul>

          <button type="submit">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
