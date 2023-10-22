// This file is to have the layout for the whole application 
// This import brings the required from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './src/components/Navbar';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
// This function App() acts for the default for every page
// Each page will have a nav bar, footer and need a connection to 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="bucket-app">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;