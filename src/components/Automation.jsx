import React, {useEffect} from 'react'
import styled from 'styled-components';
import Conveyor from './Conveyor';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Container = styled.div.attrs({
  className:"relative w-full h-full"
})``

function Automation() {

  return (
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={false}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Conveyor/>
      </Canvas>
  )
}

export default Automation;