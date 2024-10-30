import Banner from './Components/Banner/Banner';
import Navbar from './Shared/Navbar/Navbar';

const App = () => {
  return (
    <div className='bg-black h-screen'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default App;