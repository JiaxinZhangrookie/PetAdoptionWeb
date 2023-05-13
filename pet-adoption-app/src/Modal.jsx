import React, { useState } from 'react';
import './Modal.css';

function Modal({ isOpen, closeModal, pet, handleFormSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (name === '') {
      setNameError('This field is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email === '') {
      setEmailError('This field is required');
      isValid = false;
    } else if (!email.includes('@')) {
      setEmailError('This field must be a valid email address including an @');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      const formData = {
        name: name,
        email: email,
        petName: pet.name
      };

      handleFormSubmit(formData);

      // Additional logic for storing form data locally
      localStorage.setItem('formData', JSON.stringify(formData));

      setName('');
      setEmail('');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <dialog className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>
          &#9447;
        </button>
        <h2 className="modal-heading">Adoption Form</h2>
        <p className="modal-name">Adopting: {pet.name}</p>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="modal-form__name">
            Name*:
            <input className="modal-form__input" type="text" value={name} onChange={handleNameChange} />
            <span className="error">{nameError}</span>
          </label>
          <label className="modal-form__email">
            Email*:
            <input className="modal-form__input" type="text" value={email} onChange={handleEmailChange} />
            <span className="error">{emailError}</span>
          </label>
          <div className="modal-form__buttons">
            <button className="modal-form__submit" type="submit">
              Submit
            </button>
            <button className="modal-form__cancel" type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
        <p className="attention__message">Attention: * Indicates field required</p>
      </div>
    </dialog>
  );
}

export default Modal;
