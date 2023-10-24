// This file will hold the pathes to ecah tab in the navbar and renders the router 

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './src/pages/Error';
import Contact from './src/pages/Contact';
import About from './src/pages/About';
import Resume from './src/pages/Resume';
import Portfolio from './src/pages/Portfolio';

// This function deturnmines the routes for each tab in the nav
const router = createBrowserRouter([
    {
        path: '/',
        // There are two options: If no error go to App compontent as usual. But if there is an error send to error page
        element: <App />,
        errorElement: <Error />,

        // Children hold the pathes to each compontent 
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
