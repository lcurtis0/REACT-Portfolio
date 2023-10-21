// This file will hold the pathes to ecah tab in the navbar and renders the router 
// May have to restate ^^^^^^

import ReactDOM from 'react-dom/client'

import App from './App';
import Error from './pages/Error';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';

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
                path: '/About',
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

// Need explination here

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);