import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import AuthCard from './auth-card';
import Input from '../UI/input';
import Btn from '../UI/Btn';

// This component handles the verification of the user via OTP
const Verify = () => {
  const [code, setCode] = useState({ code: '' });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the code input
    if (code.code) {
      console.log('user verifiyed :' + code.code);
      navigate('/auth/reset-password');
    } else {
      console.log('code invalid');
    }
  };
  // Function to handle input changes
  const handleChange = (key, value) => {
    setCode((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  return (
    // Render the authentication card for OTP verification
    <AuthCard title={'OTP'} handleSubmit={handleSubmit}>
      <p className="mb-5">we send OTP to your email : {email} </p>
      <Input
        name={'code'}
        type={'text'}
        placeholder={'code'}
        onChange={handleChange}
      />
      <Btn>send code</Btn>
    </AuthCard>
  );
};

export default Verify;
