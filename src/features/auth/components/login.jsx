import { Link, useNavigate } from 'react-router';
import Input from '../../../shared/UI/input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/login-slice';
import Btn from '../../../shared/UI/Btn';
import AuthCard from './auth-card';

// This component handles user login functionality
const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (key, value) => {
    setLoginData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the login data
    if (loginData.email && loginData.password) {
      console.log('logged in');
      // Dispatch the login action and navigate to the home page
      dispatch(login());
      navigate('/');
    } else {
      console.log('error');
    }
  };

  return (
    // Render the authentication card for login
    <AuthCard title={'sign in'} handleSubmit={handleSubmit}>
      <Input
        name={'email'}
        type={'email'}
        variant="auth"
        placeholder={'Email'}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <Input
        name={'password'}
        type={'password'}
        variant="auth"
        placeholder={'Password'}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      <Link to="forget-password">ForgetPassword?</Link>
      <Btn>submit</Btn>
    </AuthCard>
  );
};

export default Login;
