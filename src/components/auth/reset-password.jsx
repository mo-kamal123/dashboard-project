import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import AuthCard from './auth-card';
import Input from '../UI/input';
import Btn from '../UI/Btn';
import { login } from '../../store/auth/login-slice';

const ResetPassword = () => {
  const [newPass, setNewPass] = useState({
    newPass: '',
    newPass_confirmation: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (key, value) => {
    setNewPass((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the login data
    if (
      newPass.newPass &&
      newPass.newPass_confirmation &&
      newPass.newPass === newPass.newPass_confirmation
    ) {
      console.log('password changed');
      // Dispatch the login action and navigate to the home page
      dispatch(login());
      navigate('/');
    } else {
      console.log('error');
    }
  };

  return (
    // Render the authentication card for reset password
    <AuthCard title={'reset password'} handleSubmit={handleSubmit}>
      <Input
        name={'newPass'}
        type={'password'}
        placeholder={'password'}
        onChange={handleChange}
      />
      <Input
        name={'newPass_confirmation'}
        type={'password'}
        placeholder={'Password confirmation'}
        onChange={handleChange}
      />
      <Btn>send</Btn>
    </AuthCard>
  );
};

export default ResetPassword;
