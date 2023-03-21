import React from 'react'
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import { OrbitControls } from '@react-three/drei';

function Development() {
  return (
    <Canvas camera={{fov:25, position:[5,5,5]}}>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <ambientLight intensity={1}/>
      <directionalLight position={[3,2,1]}/>
        <Cube
          decal_img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          decal_y_scale={0.95}
          decal_x_scale={0.95}
          shape_color="#e6d24c"
          shape_color_hover="#e6d24c"
          />,
    </Canvas>
  )
}

export default Development