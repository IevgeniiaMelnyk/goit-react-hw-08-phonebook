import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selrctor';
import ButtonLogout from 'shared/components/Buttons/ButtonLogout';
import { UserBar, User } from '../Navigation.styled';

const NavigationUser = () => {
  const { email } = useSelector(getUser);
  return (
    <UserBar>
      <User>{email}</User>
      <ButtonLogout type="button">Logout</ButtonLogout>
    </UserBar>
  );
};

export default NavigationUser;
