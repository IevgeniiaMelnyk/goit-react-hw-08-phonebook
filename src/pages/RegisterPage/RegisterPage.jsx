import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selrctor';
import Section from 'shared/components/Section/Section';
import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { ManeBox } from './RegisterPage.styled';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="contacts" />;
  }

  return (
    <ManeBox>
      <Section title="Register Page">
        <RegisterForm />
      </Section>
    </ManeBox>
  );
};

export default RegisterPage;
