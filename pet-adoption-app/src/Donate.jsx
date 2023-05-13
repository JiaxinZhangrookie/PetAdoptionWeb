import React, { useState } from 'react';
import './Donate.css';
import backgroundImage from './images/background_image.jpg'; 

function Donate() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmEmailError, setConfirmEmailError] = useState('');
  const [amountError, setAmountError] = useState('');
  const donationOptions = ['10', '20', '50', '100', 'Custom'];
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat' 
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
    if (event.target.value !== 'Custom') {
      setCustomAmount('');
    }
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleRecurringChange = (event) => {
    setIsRecurring(event.target.checked);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  const handleSubmit = (event) => {
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
    } else if (!email.includes('@')){
       setEmailError('This field be a valid email address including an @');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (confirmEmail === '') {
      setConfirmEmailError('This field is required');
      isValid = false;
    } else if (confirmEmail !== email) {
      setConfirmEmailError('This field must match the provided email address');
      isValid = false;
    } else {
      setConfirmEmailError('');
    }

    if (donationAmount === '') {
      setAmountError('This field is required');
      isValid = false;
    } else if (donationAmount === 'Custom' && customAmount <= 0) {
      setAmountError('Custom donation amount must be greater than 0');
      isValid = false;
    } else {
      setAmountError('');
    }

    if (isValid) {
      event.target.submit();
    } else {
      event.preventDefault();
    }
  };


  return (
    <>
    <div className="container" style={containerStyle}>
      <div className="donate" id="main">
        <h1 className="donate__title">Donate to Support Us</h1>
        <p className="donate__description">Your donation helps us provide care and find loving homes for pets in need.</p>

        <form className="donate__form" onSubmit={handleSubmit} action="/submit" method="POST">
          <div class="donate__name donate-name">
            <label class="donate__label">
              <span className="donate__name-label">
                Name* :
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="donate__input"
                />
              </span>
            </label>
            <span class="donate-name__error">{nameError}</span>
          </div>

          <div class="donate__email donate-email">
            <label className="donate__label">
              <span className="donate__email-label">
                Email* :
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  className="donate__input"
                />
              </span>
            </label>
            <span class="donate-email__error">{emailError}</span>
          </div>

          <div className="donate__confirm-email donate-confirm-email">
          <label className="donate__label">
            <span className="donate__confirm-email-label">
              Confirm Email* :
              <input
                type="text"
                value={confirmEmail}
                onChange={handleConfirmEmailChange}
                className="donate__input"
              />
            </span>
          </label>
          <span className="donate-confirm-email__error">{confirmEmailError}</span>
        </div>

          <div class="donate__amount donate-amount">
            <label className="donate__label">
              <span className="donate__email-label">
                Donation Amount* ($):
                <select value={donationAmount} onChange={handleDonationAmountChange} className="donate__select">
                  <option value="" disabled selected>Select an amount</option>
                  {donationOptions.map((amount) => (
                    <option key={amount} value={amount}>
                      {amount}
                    </option>
                  ))}
                </select>
              </span>
            </label>
            <span className="donate-amount__error">{amountError}</span>

            {donationAmount === 'Custom' && (
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="donate__input"
              />
            )}
          </div>

          <label className="`donate__label donate__label--row`">
            <input
              type="checkbox"
              checked={isRecurring}
              onChange={handleRecurringChange}
              className="donate__checkbox"
            />
            Make this a recurring donation
          </label>

          <p className="attention__message">Attension: * Indicates field required</p>

          <button type="submit" className="donate__button">Donate</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Donate;
