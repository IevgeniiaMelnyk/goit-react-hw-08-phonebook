import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';

const Spinner = lazy(() => import('shared/components/Spinner/Spinner'));
const Layout = lazy(() => import('modules/Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const PhoneBookPage = lazy(() => import('pages/PhoneBookPage/PhoneBookPage'));

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="contacts" element={<PhoneBookPage />} />
              <Route path="*" element={<RegisterPage />} />
            </Route>
          </Routes>
        </Suspense>
        <NotificationContainer />
      </BrowserRouter>
    </>
  );
};
