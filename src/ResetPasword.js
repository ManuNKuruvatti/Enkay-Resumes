import React, { useState } from 'react';

//import './ResetPassword.css'; // Import the ResetPassword CSS file
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleResetPassword = () => {
    // Add logic to handle password reset (e.g., API call to update password)
    console.log('Password reset:', { oldPassword, newPassword });
    navigate('/');
   
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <div className="form-group">
        <label htmlFor="oldPassword">Old Password</label>
        <input
          type="password"
          id="oldPassword"
          className="form-control"
          value={oldPassword}
          onChange={handleOldPasswordChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          className="form-control"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={()=>handleResetPassword()}>
        Reset Password
      </button>
    </div>
  );
}

export default ResetPassword;