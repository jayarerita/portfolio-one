import { useTexture, Decal, useCursor} from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

function Cube(props) {
  const meshRef = useRef();
  const texture = useTexture(props.decal_img);
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  useFrame((state, delta) => {
    // Animate the selection
    easing.damp3(meshRef.current.scale, hovered ? 1.07 : 1, 0.2, delta)
    easing.dampC(meshRef.current.material.color, hovered ? props.shape_color_hover : props.shape_color, 0.2, delta)
  })

  return (
    <mesh {...props} ref={meshRef} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
      <boxGeometry args={[.99,.99,.99]}/>
      <meshStandardMaterial/>
      <Decal position={[0,0,0]} rotation={[0,0,0]} scale={[props.decal_x_scale,props.decal_y_scale,2]} map={texture}/>
      <Decal position={[0,0,0]} rotation={[4.7,0,0]} scale={[props.decal_x_scale,props.decal_y_scale,2]} map={texture}/>
      <Decal position={[0,0,0]} rotation={[0,4.7,0]} scale={[props.decal_x_scale,props.decal_y_scale,2]} map={texture}/>
    </mesh>
  )
}

export default Cube