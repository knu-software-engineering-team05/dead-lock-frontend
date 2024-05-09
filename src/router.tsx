import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './components/pages/Main';

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
