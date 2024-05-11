import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './components/pages/Main';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

export const PATHS = {
  MAIN: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  TEST: '/test',
} as const;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: PATHS.MAIN,
        element: <Main />,
      },
      {
        path: PATHS.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: PATHS.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: PATHS.TEST,
        element: <div>test</div>,
      },
    ],
  },
]);

export default router;
