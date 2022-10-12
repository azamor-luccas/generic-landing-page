import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <div className="nav-container">
        <div className="logo">YourLogo</div>
        <div className="nav-left">
          <div className="nav-left-button">Features</div>
          <div className="nav-left-button">Pricing</div>
          <div className="nav-left-button">Docs</div>
          <div className="nav-left-button">Contact Us</div>
        </div>
      </div>

      <section className="hero-section">
        <div>
          <h1 className="hero-title">
          <span className="hero-title-gradient" >Your amazing</span> hero title here.
          </h1>
          <div className="hero-paragraph-container"><p className="hero-paragraph">
            Your hero paragraph goes here. What problem does your product solve? Put your exaggerated promise here.
          </p></div>
        </div>
        <div className="hero-buttons-container">
          <a>
            <div className="filled-btn">
            Action
            </div>
          </a>
          <a>
            <div className="filled-btn">
            Another Action
            </div>
          </a>
        </div>
      </section>
    </div>
    <div className="background-gradient"></div>
    </>
  );
}

export default App;
