import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selrctor';
import Section from 'shared/components/Section/Section';
import LoginForm from 'modules/LoginForm/LoginForm';
import { ManeBox } from './LoginPage.styled';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="contacts" />;
  }

  return (
    <ManeBox>
      <Section title="Login Page">
        <LoginForm />
      </Section>
    </ManeBox>
  );
};

export default LoginPage;
