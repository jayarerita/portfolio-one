import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber';
import { Cylinder, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import Pallet from "./Pallet"

const Section = styled.div.attrs({
  className:'h-screen snap-center flex flex-col items-center w-10/12 mx-auto'
})``;

const Container = styled.div.attrs({
  className:'h-screen flex items-center w-full'
})``;

const Left = styled.div.attrs({
  className:'w-1/3 flex flex-col gap-5'
})``;
const Right = styled.div.attrs({
  className:'w-2/3 relative h-full overflow-visible'
})``;

const Title = styled.h1.attrs({
  className:'text-left'
})``;
const WhatIDo = styled.div.attrs({
  className:'flex items-center'
})``;
const Subtitle = styled.h2.attrs({
  className:'text-violet-800 text-2xl'
})``;
const Line = styled.div.attrs({
  className:"rounded-full h-1 w-6 border-2 bg-violet-800 border-violet-800 mr-2"
})``;

const Image = styled.img.attrs({
  src:"./img/robot2.png",
  className:"h-96 m-auto absolute object-contain top-0 bottom-24 left-0 right-0"
})`
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`;

const Button = styled.button.attrs({
  className:"w-10 w-max p-2 px-8 bg-teal-800 text-white rounded-md shadow-md"
})``;

const Explainer = styled.p.attrs({
  className:''
})``;

function Hero() {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Connect.</Title>
          <Title>Collect.</Title>
          <Title>Analyze.</Title>
          {/*
          <WhatIDo>
            <Line/>
            <Subtitle>What I do...</Subtitle>
          </WhatIDo>*/}
          <Explainer>
            I help small manufactures to take full advantage 
            of big data technologies to drive their businesses 
            forward with bespoke automation solutions both in the 
            cloud and on the production floor.
          </Explainer>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/*
          <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Sphere args={[1, 100, 100]} scale={2}>
              <MeshDistortMaterial
                color="#5b21b6"
                attach="material"
                distort={0.5}
                speed={2}/>
            </Sphere>
          </Canvas>
          */}
          <Canvas>
            <Cylinder scale={[0.9, 0.5, 0.9]}/>
            <Pallet scale={.05}/>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
          </Canvas>
          {/*<Image></Image>*/}
        </Right>
      </Container>
    </Section>
  )
}

export default Hero