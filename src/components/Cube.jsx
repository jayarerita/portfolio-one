import { useTexture, Decal, useCursor} from '@react-three/drei'
import React, { useRef, useState } from 'react'

function Cube(props) {
  const meshRef = useRef();
  const texture = useTexture(props.decal_img);
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  //useFrame((state, delta) => (meshRef.current.rotation.x = meshRef.current.rotation.y += delta))

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={[1]}/>
      <meshStandardMaterial color={hovered ? props.shape_color_hover:props.shape_color}/>
      <Decal position={[0,0,0]} rotation={[0,0,0]} scale={[props.decal_x_scale,props.decal_y_scale,2]} map={texture}/>
      <Decal position={[0,0,0]} rotation={[4.7,0,0]} scale={[props.decal_x_scale,props.decal_y_scale,2]} map={texture}/>
      <Decal position={[0,0,0]} rotation={[0,4.7,0]} scale={[props.decal_x_scale,props.decal_y_scale,2]} map={texture}/>
    </mesh>
  )
}

export default Cube