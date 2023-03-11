import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selrctor';
import PhoneBook from 'modules/PhoneBook/PhoneBook';

const PhoneBookPage = () => {
  const isLogin = useSelector(isUserLogin);
  if (!isLogin) {
    return <Navigate to="/" />;
  }
  return <PhoneBook />;
};

export default PhoneBookPage;
