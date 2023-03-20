import { PerspectiveCamera, RenderTexture, Text} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

function Cube() {
  const textRef = useRef();

  useFrame(state => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2
  })
  return (
    <mesh>
          <boxGeometry />
          <meshStandardMaterial color="white">
            <RenderTexture attach="map">
              <PerspectiveCamera
                makeDefault
                position={[0,0,2]}/>
              <color attach="background" args={["#FBEEE6"]}/>
              <Text ref={textRef} fontSize={1} color="#115e59">Hello</Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
  )
}

export default Cube