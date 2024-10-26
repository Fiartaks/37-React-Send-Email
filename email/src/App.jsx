import  { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './App.css'

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_333rdy8', 'template_j38k2kj', form.current, {
        publicKey: 'COWLztXiq2NcVy6CY',
      })
      .then(
        () => {
          alert('Success')
        },
        (error) => {
          alert('Failed')
        },
      );
  };

  return (
  
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  )
}

export default App
