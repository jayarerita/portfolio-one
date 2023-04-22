import React, { useRef, useState, useEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import RoundedExtrude from './RoundedExtrude'
import { Box, Cylinder, Line, RoundedBox } from '@react-three/drei'
import colors from '../assets/colors'
import * as THREE from 'three'

function Roller(props){
  const cylinderRef = useRef();
  const lineRef1 = useRef();
  const lineRef2 = useRef();

  useFrame((state) => {
    lineRef1.current.rotation.z = -state.clock.elapsedTime;
    lineRef2.current.rotation.z = -state.clock.elapsedTime;
  });

  return (
    <mesh position={props.position}>
      <Cylinder args={[0.1, 0.1, 1.1]} rotation={[Math.PI/2,0,0]} ref={cylinderRef}>
        <meshStandardMaterial color={colors.greyMedium}/>
      </Cylinder>
      <Line points={[[-0.1,0,.58],[0.1,0,0.58]]} ref={lineRef1} />
      <Line points={[[-0.1,0,-.58],[0.1,0,-.58]]} ref={lineRef2}/>
    </mesh>
  )
}

function Laser(props){
  const lineRef = useRef();

  useFrame((state) => {
    lineRef.current.rotation.x = Math.sin(state.clock.elapsedTime*50)/5;
    lineRef.current.rotation.z = Math.sin(state.clock.elapsedTime*50+5)/5;
  });

  return (
    <mesh position={props.position}>
      <Line points={[[0,0,0],[0,-2,0]]} ref={lineRef} color={colors.greenLight} />
    </mesh>
  )
}

function Conveyor() {
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const lampRef = useRef();
  const [scale, setScale] = useState(0.5);
  const [position, setPosition] = useState([-1.8,0,0]);

useEffect(() => {
  // Detect the screen size and set the mesh scale accordingly
  if (window.innerWidth < 768){
    setScale(0.7);
    setPosition([-2.2,0,0]);
  }else if (window.innerWidth < 1024){
    setScale(0.5);
    setPosition([-1.2,0,0]);
  }
}, [window.innerWidth])


  useFrame((state) => {
    boxRef1.current.position.x = state.clock.elapsedTime/3  % 6;
    boxRef2.current.position.x = (state.clock.elapsedTime/3 + 2)  % 6;
    boxRef3.current.position.x = (state.clock.elapsedTime/3 + 4)  % 6;
    if (state.clock.elapsedTime % 6 < 3){
      lampRef.current.color = new THREE.Color(colors.greenLight);
    }else{
      lampRef.current.color = new THREE.Color(colors.greenMedium);
    }
  })
  return (
    <mesh position={position} scale={scale} rotation={[0.4,-0.5,0]}>
      <RoundedExtrude
        position={[0,0,-0.5]}
        width={6}
        length={0.3}
        cornerRad={0.14}
        depth={1}
        color={colors.greyDark}
      />
      <Box args={[0.8,0.8,0.8]} position={[0,.7,0]} ref={boxRef1}>
        <meshStandardMaterial color={colors.greenMedium}/>
      </Box>
      <Box args={[0.8,0.8,0.8]} position={[1,.7,0]} ref={boxRef2}>
        <meshStandardMaterial color={colors.greenMedium}/>
      </Box>
      <Box args={[0.8,0.8,0.8]} position={[2,.7,0]} ref={boxRef3}>
        <meshStandardMaterial color={colors.greenMedium}/>
      </Box>
      <RoundedBox args={[1.2,1.5,1.2]} position={[0,.7,0]}>
        <meshStandardMaterial color={colors.greyMedium}/>
      </RoundedBox>
      <RoundedBox args={[1.1,1.1,1.1]} position={[0.1,.7,0]}>
        <meshStandardMaterial color={"black"}/>
      </RoundedBox>
      <RoundedBox args={[1.2,1.5,1.2]} position={[6,.7,0]}>
        <meshStandardMaterial color={colors.greyMedium}/>
      </RoundedBox>
      <RoundedBox args={[1.1,1.1,1.1]} position={[5.9,.7,0]}>
        <meshStandardMaterial color={"black"}/>
      </RoundedBox>
      {[1,2,3,4,5].map((x,idx) => (
        <Roller key={idx} position={[x,0.15,0]}/>
      ))}
      <Cylinder args={[.1,.1,.5]} position={[3,2.5,0]}>
        <meshStandardMaterial color={colors.darkGrey}/>
      </Cylinder>

      <Laser position={[3,2.25,0]}/>
      <Cylinder args={[.1,.2,.3]} position={[6,1.6,0]}>
        <meshStandardMaterial color={"green"}  ref={lampRef}/>
      </Cylinder>
    </mesh>
  )
}

export default Conveyor