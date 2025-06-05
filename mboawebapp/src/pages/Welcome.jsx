import { useState } from 'react';
import MboaEvent from '../Components/MboaEvent/index';
import Hero from '../Components/Hero/index';
import Feature from '../Components/Features/index';
import Faq from '../Components/Faq/index';
import FaqQuestion from '../Components/Faq';
import WaitingList from '../Components/WaitingList';
import Footer from '../Components/Footer';

function Welcome() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <MboaEvent/>
        <Hero/>
        <Feature/>
        <Faq/>
        <WaitingList/>
        <Footer/>
      </div>
      
  )
}

export default Welcome
