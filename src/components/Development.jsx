import React from 'react'
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import { OrbitControls, Billboard, Text } from '@react-three/drei';
import languages from "../assets/languages_decals.js"
import styled from 'styled-components';
import RoundedExtrude from './RoundedExtrude';
import colors from '../assets/colors';

const Grid = styled.div.attrs({
  className:"flex flex-row flex-wrap justify-center items-center gap-1 md:gap-5"
})``

const GridItem = styled.div.attrs({
  className:"w-20 h-20 md:w-36 md:h-36"
})``

function Development({caption}) {
  return (
    <>
    <Grid>
        {languages.map((decal, idx) => (
            <GridItem key={decal.title}>
            <CubeCanvas
              decal={decal}/>
            </GridItem>
        ))}
    </Grid>
    </>
  )
}

function CubeCanvas({decal}) {
  return (
    <Canvas camera={{fov:25, position:[2.4,2.4,2.4]}}>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <ambientLight intensity={1}/>
      <directionalLight position={[3,2,1]}/>
      <Cube
        decal_img={decal.src}
        decal_x_scale={decal.x_scale}
        decal_y_scale={decal.y_scale}
        shape_color={decal.shape_color}
        shape_color_hover={decal.shape_color_hover}
      />
  </Canvas>
  )
}

export default Development