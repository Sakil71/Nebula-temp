import Banner from './Components/Banner/Banner';
import Intro from './Components/Intro/Intro';
import Process from './Components/Process/Process';
import Navbar from './Shared/Navbar/Navbar';

const App = () => {

  return (
    <div className='bg-black px-10 text-white font-inter'>
      <Navbar />
      <Banner />
      <Intro></Intro>
      <Process></Process>
    </div>
  );
};

export default App;
