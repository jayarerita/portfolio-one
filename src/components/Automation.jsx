import React, {useEffect} from 'react'
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const Container = styled.div.attrs({
  className:"relative w-full"
})``

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

function Automation() {

  return (
    <Container>
    <Canvas>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={1}/>
      <directionalLight position={[3,2,1]}/>
      <Sphere args={[1.9, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color="#5b21b6"
          attach="material"
          distort={0.5}
          speed={2}/>
      </Sphere>
    </Canvas>
    <Image></Image>
    </Container>
  )
}

export default Automation;