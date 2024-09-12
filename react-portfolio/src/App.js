import React from react;
import About from './components/About';
import Projects from './components/Proects';
import SocialLinks from './coponents/SocialLinks';

function App () {
  return (
    <div className='min-h-screen text-white'>
	  <header className='text-center'>My Portfolio</header>
	  </About>
	  </Projects>
	  </SocialLinks>
	  <footer className='text-center'>
	    © Tony Mputhia. All rights reserved
	  </footer>
    </div>
  );
}

export default App;
