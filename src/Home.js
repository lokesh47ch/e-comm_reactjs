import React from 'react'
import styled from 'styled-components';
import HeroSection from "./components/HeroSection";
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProducts from './FeatureProducts';


const Home = () => {

  const data  = {
    name: 'Lokesh'
  }
  return <>
  <HeroSection myData={data}/>
  <FeatureProducts />
  <Services/>
  <Trusted />
  </>  

}


export default Home;