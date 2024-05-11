import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './components/pages/Main';
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
        path: '',
        element: <Main />,
      },
      {
        path: 'test',
        element: <div>test</div>,
      },
    ],
  },
]);

export default router;
