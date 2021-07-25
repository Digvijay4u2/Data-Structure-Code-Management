import React from 'react';
import { homeObjOne} from './Data';
import InfoSection from '../../Components/InfoSection/InfoSection';
import AppNav from '../../Components/Navbar/Navbar'

function Home() {
  return (
    <>
      <AppNav />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;