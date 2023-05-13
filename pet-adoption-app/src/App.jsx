import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Adopt from './Adopt';
import About from './About';
import Donate from './Donate';
import Volunteer from './Volunteer';

function App() {
  const [page, setPage] = useState('Home');
  useEffect(() => {
    const titles = {
      Home: 'Home - Adopt a paw',
      Adopt: 'Adopt a Pet - Adopt a paw',
      Donate: 'Donate to Support Us - Adopt a paw',
      Volunteer: 'Become a Volunteer - Adopt a paw'
    };
    document.title = titles[page] || 'Adopt a paw';
  }, [page]); 

  const renderMainContent = () => {
    switch (page) {
      case 'Home':
        return <Main page={page} setPage={setPage}/>;
      case 'About':
        return <About setCurrentPage={setPage} />;
      case 'Adopt':
        return <Adopt setCurrentPage={setPage} />;
      case 'Donate':
        return <Donate setCurrentPage={setPage} />;
      case 'Volunteer':
        return <Volunteer setCurrentPage={setPage} />;
      default:
        return <Main page={page} setPage={setPage}  />;
    }
  };

  return (
    <div className="app">
      <Header setPage={setPage} />
      {renderMainContent()}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
