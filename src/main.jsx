import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Campaign from './Components/campaign/Campaign.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import DonationDetails from './Components/Donation/Donation.jsx';
import PrivateDonation from './Components/PrivateRoute/PrivateDonation.jsx';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx';
import Testing from './Components/testing/Testing.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "campaign",
        element: <Campaign></Campaign>,
      },
      {
        path: "dashboard",
        element: ( <PrivateDonation> <Dashboard></Dashboard> </PrivateDonation> ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "testing",
        element: <Testing></Testing>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "donate/:id",
        element:(
                  <PrivateDonation>
                    <DonationDetails></DonationDetails>
                  </PrivateDonation>
                ),
        loader: () => fetch('/campaign.json')

      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
