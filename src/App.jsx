import './App.css';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import People from './Components/People/People';
import Tv from './Components/TV/Tv';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import NotFound from './Components/NotFound/NotFound';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import TvDetails from './Components/TV/TvDetails';
import AuthLayout from './Layouts/AuthLayout';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/Signup/SignUp';

function App() {
  function ProtectedRoutes(props) {
    let token = localStorage.getItem('token')
    if (!token) {
      return <Navigate to="/signin"/>
    } else {
      return props.children
    }
  }

let routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        ),
      },
      {
        path: "home",
        element: (
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        ),
      },
      { path: "tv", element: <Tv /> },
      { path: "movies", element: <Movies /> },
      { path: "people", element: <People /> },
      { path: "details/:id", element: <ItemDetails /> },
      { path: "details/tv/:id", element: <TvDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
