import React from 'react';
import Modal from 'react-modal';
import './Timeout.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth:"500px",
    width: "100%",
    padding: "50px",
    fontSize: "20px"
  },  
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

export const TimeoutWarningModal = ({isOpen, onRequestClose}) => {  
  const onLogOffCall = () => {
    // Implement your logout functionality here, e.g. clear the users login cache or hit your signout server
    window.location.href = "/admin-login"
  }

  return (
    <div> 
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Session Timeout</h2>
        <div>You're being timed out due to inactivity. Please choose to stay signed in or to logoff. Otherwise, you will be logged off automatically</div>
        <br/>
        <button className='sessionbutton' onClick={onLogOffCall}>Log off</button>
        <button className='sessionbutton' onClick={onRequestClose}>Stay Logged In</button>
      </Modal>
    </div>  
  );
}