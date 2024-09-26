import React from react;
import About from './components/About';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App () {
  return (
    <div className='min-h-screen text-white'>
			<header className='text-center py-10'>
				<h1 className='text-4xl font-bold'>My Portfolio</h1>
			</header>
			<About />
			<Projects />
			<SocialLinks />
			<footer className='text-center'>
				© Tony Mputhia. All rights reserved
			</footer>
    </div>
  );
}

export default App;
