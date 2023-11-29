// This file will hold the pathes to ecah tab in the navbar and renders the router 

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './REACT-Portfolio/src/pages/Error';
import Contact from './REACT-Portfolio/src/pages/Contact';
import About from './REACT-Portfolio/src/pages/About';
import Resume from './REACT-Portfolio/src/pages/Resume';
import Portfolio from './REACT-Portfolio/src/pages/Portfolio';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,

        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
