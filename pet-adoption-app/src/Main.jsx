
import Home from './Home';
import About from './About';
import Adopt from './Adopt';
import Donate from './Donate';
import Volunteer from './Volunteer';


function Main({page, setPage}) {

  return (
    <main>
      { (page === 'Home') && <Home setPage={setPage}/> }
      { (page === 'About') && <About/> }
      { (page === 'Adopt') && <Adopt/> }
      { (page === 'Donate') && <Donate/> }
      { (page === 'Volunteer') && <Volunteer/> }
    </main> 
  );
}

export default Main;