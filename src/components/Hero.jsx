import React, { useRef, useEffect, Suspense, useCallback } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Billboard, Text } from '@react-three/drei';
import Loading from './Loading';
import DataSkid from './DataSkid';
import ScrollIcon from './ScrollIcon';

const Section = styled.div.attrs({
  className:'h-[200vh] md:h-screen snap-center flex flex-col items-center md:w-10/12 mx-auto'
})``;

const Container = styled.div.attrs({
  className:'h-[200vh] md:h-screen flex-col md:flex-row flex items-center space w-full justify-center md:justify-between'
})``;

const Left = styled.div.attrs({
  className:'px-8 md:px-0 md:w-1/3 flex flex-col gap-5 items-center md:items-left'
})``;
const Right = styled.div.attrs({
  className:'w-screen md:w-2/3 relative h-screen md:h-full overflow-visible'
})``;

const Title = styled.h1.attrs({
  className:'text-center md:text-left'
})``;

const Button = styled.button.attrs({
  className:"w-10 w-max p-2 px-8 bg-greenLight text-black rounded-md shadow-md"
})``;

const Explainer = styled.p.attrs({
  className:'text-center md:text-left'
})``;

function Hero() {

  return (
    <Section id="hero-id">
      <Navbar/>
      <Container>
        <Left>
          <Title>Connect.</Title>
          <Title>Collect.</Title>
          <Title>Analyze.</Title>
          <Explainer>
            I help small manufactures take advantage
            of big data technologies to drive their businesses 
            forward by building custom automation solutions both in the 
            cloud and on the production floor.
          </Explainer>
          <Button>
            <a href="#work-id">Learn More</a>
          </Button>
          <ScrollIcon href="#data-skid-id"/>
        </Left>
        <Right id="data-skid-id">
          <Suspense fallback={null}>
            <Canvas>
              <DataSkid/>
              <OrbitControls enableZoom={false} autoRotate={true}/>
              <ambientLight intensity={1.1}/>
              <directionalLight position={[3,2,1]}/>
              <directionalLight position={[3,-2,1]}/>
            </Canvas>  
          </Suspense>
          <div className={"absolute bottom-8 left-1/2 -translate-x-1/2 "}>
          <ScrollIcon href="#skils-id"/>
          </div>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero