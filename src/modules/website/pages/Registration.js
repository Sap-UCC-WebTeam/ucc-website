
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registrationImage from "../../../assets/Registration.png"; // Replace with your image path

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    department: '',
    postalCode: '',
    city: '',
    country: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{
      width: '80%',
      marginLeft: '10%',
      marginRight: '10%',
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
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <div>
            <h2 style={{
              borderBottom: '2px dashed #ccc',
              paddingBottom: '10px',
              color: '#000000',
              fontSize: '30px',
              fontWeight: '500',
              marginBottom: '20px',
            }}><Link to="/welcome">Register</Link></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {[
              ['FirstName', 'LastName'],
              ['Email', 'Phone'],
              ['Institution', 'Department'],
              ['PostalCode', 'City'],
              ['Country'],
            ].map((fieldGroup, index) => (
              <div key={index}>
                {fieldGroup.map((fieldName) => (
                  <React.Fragment key={fieldName}>
                    <label style={{
                      width: '45%',
                      color: '#555',
                      display: 'block',
                      marginBottom: '8px',
                      textTransform: 'capitalize',
                    }} htmlFor={fieldName}>
                      {fieldName.replace(/([a-z])([A-Z])/g, '$1 $2') + ':'}
                    </label>
                    <input
                      type={fieldName.includes('password') ? 'password' : 'text'}
                      id={fieldName}
                      name={fieldName}
                      value={formData[fieldName]}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        color: '#555',
                      }}
                    />
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div style={{ borderBottom: '2px dashed #ccc', marginBottom: '20px' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
              />
              <label htmlFor="agreeTerms" style={{ color: '#41C0E8' }}>
                I agree with terms and conditions.
              </label>
            </div>
            <button type="submit" style={{
              backgroundColor: '#41C0E8',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}>
              <Link to="/login">
              Register</Link>
            </button>
          </div>
          
        </form>
        <img
          src={registrationImage}
          alt="Registration"
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

export default Registration;
