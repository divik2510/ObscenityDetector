import React from 'react'
import './Popup.css';

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.validUrl ? (
          <div className='valid'>
            <h3>VALID!!!</h3>
            <p>The URL you entered is valid.</p>
            {/* <img src="./kavachlogo.png" alt="Green tick" /> */}
          </div>
        ) : (
          <div className='inValid'>
            <h3>ERROR!</h3>
            <p>Please enter a valid URL.</p>
            {/* <img src="./kavachlogo.png" alt="Green tick" /> */}
          </div>
        )}
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}


export default Popup