import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginImage from "../../../assets/Login.png"; // Replace with your image path
import SAPLogo from '../../../assets/SAP.png';

const ForgotPasswordVerifyCode = () => {
    const [code, setCode] = useState('');
  
    const onCodeChange = (e) => {
      setCode(e.target.value);
    };
  
    const onCodeSubmit = (e) => {
      e.preventDefault();
      // Handle code verification
      console.log('Code entered:', code);
    };

  return (
    <div style={{
      width: '50%',
      marginLeft: '25%',
      marginRight: '25%',
      marginTop: '2%',
      background: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        padding: '30px',
      }}>
        <form style={{ width: '100%' }} onSubmit={onCodeSubmit}>
        <div className="flex items-center">
          <img src={SAPLogo} alt="Logo" className="h-12 mr-8" />
        </div>
        <div className="h-20"></div>
          <div>
            <h2 style={{
              paddingBottom: '10px',
              color: '#000000',
              fontSize: '30px',
              fontWeight: '500',
              marginBottom: '0px',
            }}>Verify Code</h2>
            <p  style={{
              borderBottom: '2px dashed #ccc',
              paddingBottom: '10px',
              color: '#555555',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '20px',
            }}>An authentication code has been sent to your email.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                <div>
                  <label style={{
                    width: '45%',
                    color: '#555',
                    display: 'block',
                    marginBottom: '8px',
                    textTransform: 'capitalize',
                  }} htmlFor="email">
                    Enter Code:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={code}
                    onChange={onCodeChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      boxSizing: 'border-box',
                      color: '#555',
                    }}
                  />
                 
                 
                </div><br/>
              </div>
             

              <div style={{ borderBottom: '2px dashed #ccc', marginBottom: '20px' }}></div>

              <button type="submit" style={{
                backgroundColor: '#41C0E8',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
              }}>
                Submit
              </button>

              <div style={{ marginBottom: '20px' }}></div>

              


            </div>
          </div>
        </form>
        <img
          src={loginImage}
          alt="Login"
            style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordVerifyCode;
