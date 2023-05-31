import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import Main, { mainLoader } from './layout/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logoutAction } from './actions/logout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
      }
    ]
  },
  {
    path: "logout",
    action: logoutAction
  }
])
function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
