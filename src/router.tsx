import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './components/pages/Main';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Test from './components/pages/Test';
import ResultList from './components/pages/ResultList';
import ResultDetail from './components/pages/ResultDetail';
import HelpfulPrograms from './components/pages/HelpfulPrograms';

export const PATHS = {
  MAIN: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  RESULT_LIST: '/results',
  RESULT_DETAIL: '/results/:id',
  HELPFUL_PROGRAMS: '/results/:id/programs',
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
        path: PATHS.RESULT_LIST,
        element: <ResultList />,
      },
      {
        path: PATHS.RESULT_DETAIL,
        element: <ResultDetail />,
      },
      {
        path: PATHS.HELPFUL_PROGRAMS,
        element: <HelpfulPrograms />,
      },
      {
        path: PATHS.TEST,
        element: <Test />,
      },
    ],
  },
]);

export default router;
