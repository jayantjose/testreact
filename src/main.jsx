import React, { Fragment, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './Init';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import { RouterData } from './common/routingdata';
import App from './components/layout/App';
import Loader from './components/layout/layoutcomponents/Loader';
import CustomSwitcher from './components/layout/customswitcher';
import CustomAuthenticationPages from './components/layout/customauthenticationpages';


const Switcher = lazy(() => import('./components/pages/switcher'));

const SignIn = lazy(() => import('./components/pages/SignIn'));
const SignUp = lazy(() => import('./components/Pages/SignUp'));
const ForgotPassword = lazy(() => import('./components/Pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./components/Pages/ResetPassword'));
const Error404 = lazy(() => import('./components/pages/error404'));


ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>

    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>

          {/* components Routes */}

          {RouterData.map((idx) => (
            <Route path={`${import.meta.env.BASE_URL}`} element={<App />} key={Math.random()}>
              <Route path={idx.path} element={idx.element} />
            </Route>
          ))};

         
          {/* Custom Switcher Pages */}
          <Route path="/" element={<CustomSwitcher />}>
            <Route path={`${import.meta.env.BASE_URL}pages/switcher`} element={<Switcher />} />
          </Route>

          {/* Custom Authentication Pages */}
          <Route path="/" element={<CustomAuthenticationPages />}>
            <Route index element={<SignIn />} />
            <Route path={`${import.meta.env.BASE_URL}signin`} element={<SignIn />} />
            <Route path={`${import.meta.env.BASE_URL}signup`} element={<SignUp />} />
            <Route path={`${import.meta.env.BASE_URL}forgot-password`} element={<ForgotPassword />} />
            <Route path={`${import.meta.env.BASE_URL}reset-password`} element={<ResetPassword />} />
            <Route path={`${import.meta.env.BASE_URL}error404`} element={<Error404 />} />
          </Route>
        </Routes>

      </React.Suspense>
    </BrowserRouter>
  </Fragment>
)
