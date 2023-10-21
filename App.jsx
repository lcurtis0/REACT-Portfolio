// This file is to have the layout for the whole application 
// This import brings the required from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar';
import Footer from './components/Footer';

// This function App() acts for the default for every page
// Each page will have a nav bar, footer and need a connection to 'react-router-dom'
function App() {
  return (
    <>
    <Nav />
    <main className="bucket-app">
        <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default App;