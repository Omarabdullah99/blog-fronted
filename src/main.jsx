import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Register from './pages/Register.jsx';
import {Provider} from 'react-redux'
import store from "./reudx/store.js";
import Login from './pages/Login.jsx';
import AddEditTour from './component/AddEditTour.jsx';
import Dashboard from './pages/Dashboard.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import SearchBlog from './pages/SearchBlog.jsx';
import TagsBlog from './pages/TagsBlog.jsx';
import UserBlog from './pages/UserBlog.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/blogs/search",
        element:<SearchBlog />
      },
      {
        path:"/blog/tag/:tag",
        element:<TagsBlog />
      },
      {
        path:"/blog",
        element:<Blog />
      },
      {
        path:"/blog/:id",
        element:<SingleBlog />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/services",
        element:<Services />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/register",
        element:<Register />
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/addblog",
        element:<AddEditTour />
      },
      {
        path:"/dashboard",
        element:<Dashboard />
      },
      {
        path:"/editblog/:id",
        element:<AddEditTour />
      },
      {
        path:"/userblog/:userId",
        element:<UserBlog />
      },
    

    
     


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
