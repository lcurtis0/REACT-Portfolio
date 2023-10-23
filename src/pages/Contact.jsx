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
    // credit to devBotPlus for email check : https://www.youtube.com/watch?v=eAIVqD02KjU&ab_channel=devBotPlus
    const { email, value } = e.target;

    return email === setEmail(value);


    // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if (regex.test(email)){
    //   return;
    // } else if (!regex.test(email) || email === ""){
    //   alert("Email is not valid");
    // } else {
    //   return;
    // }


  }

  const messageInput = (e) => {
    const { message, value } = e.target;

    return message === setMessage(value);
  }

  const handleFormSubmit = (e) => {

    if (firstName.value.length && lastName.value.length === 0) {
      alert("Please enter at least one of the name inputs")
      return false;
    } else if (email.value.length === 0) {
      alert("Please enter an email")
      return false;
    } else if (message.value.length === 0) {
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
