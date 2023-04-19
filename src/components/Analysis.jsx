import React, {useEffect} from 'react'
import styled from 'styled-components';
import Graph from './Graph';
import { OrbitControls, Billboard, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import RoundedExtrude from './RoundedExtrude';
import colors from '../assets/colors';

const Container = styled.div.attrs({
  className:"relative w-full h-full"
})``

function Analysis({caption}) {

  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={false}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Graph/>
      </Canvas>
    </Container>
  )
}

export default Analysis;