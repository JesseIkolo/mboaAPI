import { useState } from 'react';
import MboaEvent from '../components/mboaevent/index';
import Hero from '../components/hero/index';
import Feature from '../components/features/index';
import Faq from '../components/faq/index';
import FaqQuestion from '../components/faq';
import WaitingList from '../components/waitinglist';
import Footer from '../components/footer';

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
