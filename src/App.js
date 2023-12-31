import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateUsername = (value) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? '' : 'Invalid email format';
  };

  const validatePassword = (value) => {
    // Validate password format
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[^A-Za-z\d@]).*$/;
    return passwordRegex.test(value)
      ? ''
      : 'Password must contain an uppercase letter, a number, and only @ as a special character.';
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(validateUsername(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleLogin = () => {
    // Validate fields before attempting login
    setUsernameError(validateUsername(username));
    setPasswordError(validatePassword(password));

    // Perform login logic if no validation errors
    if (!validateUsername(username) && !validatePassword(password)) {
      // Your login logic here
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard
            className='bg-dark text-white my-5 mx-auto'
            style={{ borderRadius: '1rem', maxWidth: '400px' }}
          >
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              {/* ... (Your SVG path data) */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 103.37"><g id="b8291eee-f517-4ef5-a1f1-cd7515d16fec" data-name="Layer 2"><g id="a718bb33-5424-4365-a3de-96de073f12bf" data-name="Layer 1"><path d="M150.3,65.18A26.86,26.86,0,0,0,162,68.09c4.85,0,7.42-2,7.42-5.06s-2.22-4.58-7.84-6.53c-7.77-2.77-12.9-7.07-12.9-13.87,0-8,6.73-14,17.69-14A27.46,27.46,0,0,1,178.33,31L176,39.44a21.87,21.87,0,0,0-9.71-2.22c-4.58,0-6.8,2.15-6.8,4.51,0,3,2.57,4.3,8.67,6.59,8.26,3,12.07,7.35,12.07,13.94,0,7.84-6,14.5-18.8,14.5a30.48,30.48,0,0,1-13.25-2.91Z" fill="#30c072"/><path d="M232.17,58.17c-.2-5.62-.41-12.42-.41-19.22h-.14c-1.53,6-3.47,12.63-5.27,18.11l-5.69,18.25H212.4l-5-18c-1.53-5.55-3-12.21-4.23-18.32H203c-.21,6.32-.49,13.53-.77,19.36l-.9,17.76h-9.78l3-46.76h14.09l4.58,15.61c1.52,5.41,2.91,11.24,3.95,16.72h.28c1.25-5.41,2.84-11.59,4.44-16.79l4.92-15.54h13.88l2.49,46.76H232.94Z" fill="#30c072"/><path d="M267.22,64.07l-3.33,12H253l14.22-46.76H281.1l14.56,46.76H284.22l-3.61-12Zm11.86-7.91-2.91-9.92c-.83-2.78-1.66-6.25-2.36-9h-.14c-.69,2.77-1.38,6.31-2.15,9l-2.77,9.92Z" fill="#30c072"/><path d="M307.05,29.93a93,93,0,0,1,14.09-1c6.93,0,11.79,1,15.12,3.68,2.84,2.22,4.37,5.55,4.37,9.85a12.39,12.39,0,0,1-8.26,11.45v.21c3.26,1.32,5.07,4.36,6.25,8.67,1.45,5.34,2.84,11.44,3.74,13.25H331.54a63.51,63.51,0,0,1-3.19-10.89c-1.32-5.9-3.33-7.43-7.7-7.5h-3.12V76.07H307.05Zm10.48,20.12h4.16c5.27,0,8.4-2.63,8.4-6.73s-2.92-6.45-7.78-6.45a20.79,20.79,0,0,0-4.78.35Z" fill="#30c072"/><path d="M362.49,38.19H349.87V29.31H385.8v8.88H373V76.07H362.49Z" fill="#30c072"/><path d="M396.36,65.18a26.78,26.78,0,0,0,11.72,2.91c4.86,0,7.42-2,7.42-5.06s-2.22-4.58-7.84-6.53c-7.77-2.77-12.9-7.07-12.9-13.87,0-8,6.73-14,17.69-14A27.46,27.46,0,0,1,424.38,31L422,39.44a21.87,21.87,0,0,0-9.71-2.22c-4.58,0-6.8,2.15-6.8,4.51,0,3,2.57,4.3,8.68,6.59,8.25,3,12.07,7.35,12.07,13.94,0,7.84-6,14.5-18.8,14.5-5.35,0-10.62-1.45-13.25-2.91Z" fill="#58595b"/><path d="M466.5,56.3H449.3V67.39h19.21v8.68H438.75V29.31h28.79V38H449.3v9.71h17.2Z" fill="#58595b"/><path d="M480.94,29.93A92.83,92.83,0,0,1,495,29c6.94,0,11.8,1,15.13,3.68,2.84,2.22,4.37,5.55,4.37,9.85a12.39,12.39,0,0,1-8.26,11.45v.21c3.26,1.32,5.06,4.36,6.24,8.67,1.46,5.34,2.85,11.44,3.75,13.25H505.43c-.7-1.39-1.87-5.14-3.19-10.89-1.32-5.9-3.33-7.43-7.7-7.5h-3.13V76.07H480.94Zm10.47,20.12h4.17c5.27,0,8.39-2.63,8.39-6.73s-2.91-6.45-7.77-6.45a21,21,0,0,0-4.79.35Z" fill="#58595b"/><path d="M537.9,76.07l-15-46.76h11.59l5.68,19.77c1.6,5.62,3.06,10.89,4.17,16.72h.21c1.17-5.62,2.63-11.17,4.23-16.51l6-20H566L550.25,76.07Z" fill="#58595b"/><polygon points="0 35.22 35.22 0 35.22 69.3 0 35.22" fill="#58595b"/><polygon points="0.04 69.75 35.26 69.75 70.02 103.37 35.26 103.37 0.04 69.75" fill="#30c072"/><polygon points="105.91 68.16 70.7 103.37 70.7 34.08 105.91 68.16" fill="#58595b"/><polygon points="35.79 0.42 71 0.42 105.76 34.05 71 34.05 35.79 0.42" fill="#30c072"/></g></g></svg>
              <MDBInput
                wrapperClass='mt-4 mx-5 w-100 pt-5'
                labelClass='text-white'
                placeholder='Username'
                id='formControlLg'
                type='email'
                size='md'
                onChange={handleUsernameChange}
                value={username}
                error={usernameError}
              />
              {usernameError && (
                <p className='small text-danger my-1'>{usernameError}</p>
              )}
              <MDBInput
                wrapperClass='mt-4 mx-5 w-100'
                labelClass='text-white'
                placeholder='Password'
                id='formControlLg'
                type='password'
                size='md'
                onChange={handlePasswordChange}
                value={password}
                error={passwordError}
              />
              {passwordError && (
                <p className='small text-danger my-1'>{passwordError}</p>
              )}

              <button
                outline
                className='mx-2 px-5 mt-3 w-100 btn btn-success text-light'
                onClick={handleLogin}
                // Disable the button if there are validation errors
                disabled={usernameError || passwordError}
              >
                Login
              </button>

              {/* Display validation errors */}
              
              

              <p className='small my-3 pb-lg-2'>
                <a className='text-white-50' href='#!'>
                  Forgot password?
                </a>
              </p>

              <div className='d-flex flex-row mt-3 mb-5'>
                {/* ... (Your social media login buttons) */}
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
