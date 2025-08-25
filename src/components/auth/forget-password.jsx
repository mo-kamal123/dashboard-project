import { useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../UI/input';
import AuthCard from './auth-card';
import Btn from '../UI/Btn';

// This component handles the forget password functionality
const ForgetPassword = () => {
  const [userMail, setUserMail] = useState({ email: '' });
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the email input
    if (userMail.email) {
      console.log('user mail :' + userMail.email);
      // Navigate to the verification page with the email as a query parameter
      navigate(`/auth/verify?email=${userMail.email}`);
    } else {
      console.log('enter your mail');
    }
  };

  // Function to handle input changes
  const handleChange = (key, value) => {
    setUserMail((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  return (
    // Render the authentication card for forget password
    <AuthCard title={'reset password'} handleSubmit={handleSubmit}>
      <p className="mb-5">Enter your email to send OTP to reset password </p>
      <Input
        name={'email'}
        type={'email'}
        placeholder={'Email'}
        onChange={handleChange}
      />
      <Btn>send code</Btn>
    </AuthCard>
  );
};

export default ForgetPassword;
