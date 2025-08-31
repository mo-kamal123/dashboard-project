import { useSelector } from 'react-redux';

const useUser = () => {
  const userData = useSelector((state) => state.user.user);
  return userData;
};

export default useUser;
