import { Link, useNavigate } from 'react-router';
import Input from '../UI/input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth/login-slice';
import Btn from '../UI/Btn';
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
        placeholder={'Email'}
        onChange={handleChange}
      />
      <Input
        name={'password'}
        type={'password'}
        placeholder={'Password'}
        onChange={handleChange}
      />
      <Link to="forget-password">ForgetPassword?</Link>
      <Btn>submit</Btn>
    </AuthCard>
  );
};

export default Login;
