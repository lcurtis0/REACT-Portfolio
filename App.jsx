// This file is to have the layout for the whole application 
// This import brings the required from 'react-router-dom'
import { Outlet } from 'react-router-dom';
// Over all styling to the page
import './App.css';
import Nav from './src/components/Navbar';
import Footer from './src/components/Footer';
import Header from './src/components/Header';

// This function App() acts for the default for every page
// Each page will have a nav bar, footer and need a connection to 'react-router-dom'
function App() {
  return (
    <>
      <div className='header'>
        <Header />
      </div>

      <div className='nav'>
        <Nav />
      </div>


      <main className="page">
        <Outlet />
      </main>
      <hr></hr>
      <Footer />
    </>
  );
}

export default App;