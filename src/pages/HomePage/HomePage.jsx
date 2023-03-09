import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selrctor';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="contacts" />;
  }
  if (!isLogin) {
    return <Navigate to="register" />;
  }

  return <></>;
};

export default HomePage;
