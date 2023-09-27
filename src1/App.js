import "./App.css";
import React, { useState } from "react";
import Popup from "./Components/Popup";

// function App() {
  function App() {
    const [url, setUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonPopup, setButtonPopup] = useState(false);
    const [validUrl, setValidUrl] = useState(false);

    const handleUrlChange = (event) => {
      setUrl(event.target.value);
      setErrorMessage("");
    };

     const handleRefresh = (e) => {
       e.preventDefault();
       window.location.reload();
     };
    

    const handleSubmit = (event) => {
      event.preventDefault();
      // Check if the input value is a valid URL
      const regex = /^(ftp|http|https):\/\/[^ "]+$/;
      if (regex.test(url)) {
        console.log("Submitted URL:", url);
        // Set buttonPopup to true with validUrl true if the URL is valid
        setButtonPopup(true);
        setValidUrl(true);
      } else {
        // Set buttonPopup to true with validUrl false if the URL is invalid
        setButtonPopup(true);
        setValidUrl(false);
      }
    };

    return (
      <div className="App">
        <div className="background">
          <div className="navbar">
            <div className="side1">KAVACH - 2023</div>
            <div className="side2">ByteBuilder (2023-2024)</div>
          </div>
          <div className="main">
            <div className="firstHalf">
              <h1>
                Obscenity
                <br />
                Blocker
                <br />
                Solution
              </h1>
              <p>
                An obscenity blocker solution is a software designed to <br />
                detect and block inappropriate content from being accessed{" "}
                <br />
                or shared online. These solutions use advanced algorithms <br />
                to analyze content and prevent its dissemination.
              </p>
            </div>
            <div className="secondHalf">
              <form>
                <label htmlFor="urlInput">
                  <h2>Enter the URL</h2>
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="urlInput"
                  name="url"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder="https://example.com"
                />
                <div className="buttons">
                  <button type="submit" onClick={handleSubmit}>
                    Predict
                  </button>
                  <button type="submit" onClick={handleRefresh}>
                    Refresh
                  </button>
                  <Popup
                    trigger={buttonPopup}
                    setTrigger={setButtonPopup}
                    validUrl={validUrl}
                  />
                </div>
              </form>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default App;
