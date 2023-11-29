
import { Outlet } from 'react-router-dom';

import './App.css';
import Nav from './REACT-Portfolio/src/components/Navbar';
import Footer from './REACT-Portfolio/src/components/Footer';
import Header from './REACT-Portfolio/src/components/Header';


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