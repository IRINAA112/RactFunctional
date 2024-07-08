import './App.css';
import React from 'react';
import Form from './Form';

function App() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign up page</title>
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    <div calss="leftside">
      <h1 className="title">Sign up</h1>
      <div>
        <Form/>
        <br />
        <div className="btn-container">
          <button type="submit" className="signupbtn">
            Register
          </button>
        </div>
      </div>
    </div>
    <div className="rightside">
      <div>
        <img className="main-image" src="signup.jpg" alt="imagine" />
      </div>
      <br />
      <a href="signIn.html" className="member">
        I am already a member
      </a>
    </div>
  </div>
</>

  );
}

export default App;
