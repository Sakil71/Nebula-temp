import Banner from './Components/Banner/Banner';
import Intro from './Components/Intro/Intro';
import Process from './Components/Process/Process';
import Navbar from './Shared/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './Components/Services/Services';
AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 50,
  duration: 1000,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

const App = () => {

  return (
    <div className='bg-[#080807] px-3 md:px-10 text-white font-inter overflow-hidden'>
      <Navbar />
      <Banner />
      <Intro></Intro>
      <Process></Process>
      <Services></Services>
    </div>
  );
};

export default App;
