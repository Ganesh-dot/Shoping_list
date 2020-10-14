import React from 'react'
import HeroSection from '../../HeroSection';
import { homeObjOne , homeObjTwo , homeObjThree , homeObjFour } from './Data';

export default function Home() {
    return (
        <>
          <HeroSection {...homeObjOne} />
          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjFour} />  
        </>
    )
}
