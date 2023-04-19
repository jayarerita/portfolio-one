import React, {useRef, useEffect} from 'react';
import { Cylinder } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Pallet from './Pallet';
import colors from '../assets/colors';

function DataSkid() {
    const cylinderBottomRef = useRef(null);
    const cylinderMiddleRef = useRef(null);
    const cylinderTopRef = useRef(null);
    const palletRef = useRef(null);
  
    /*
    useEffect(()=>{
      if (!!cylinderBottomRef.current && !!cylinderMiddleRef.current){
  
        console.log("At timeline")
        const timeLine = gsap.timeline({paused:true});
  
        timeLine.to(cylinderBottomRef.current.position,  {
          y: .7,
          duration: 3,
          ease: "power2.out",
        });
  
        timeLine.to(cylinderMiddleRef.current.position, {
          y: 1.35,
          duration: 2,
          ease: "power2.out",
        }, ">-1");
  
        timeLine.play();
      };
    }, [])
    */
    useFrame((state) => {
        cylinderTopRef.current.position.y = Math.sin(state.clock.elapsedTime+1)/10 + 2;
        cylinderMiddleRef.current.position.y = Math.sin(state.clock.elapsedTime+2)/10 + 1.35;
        cylinderBottomRef.current.position.y = Math.sin(state.clock.elapsedTime+3)/10 + 0.7;
    })

  return (
    <mesh position={[0,-1,0]} rotation={[0,Math.PI/4,0]}>
        <Cylinder scale={[0.9, 0.5, 0.9]} ref={cylinderTopRef} position={[0,2,0]}>
            <meshStandardMaterial color={colors.greyDark} roughness={0.7} metalness={2}/>
        </Cylinder>
        <Cylinder scale={[0.9, 0.5, 0.9]} position={[0,1.35,0]} ref={cylinderMiddleRef}>
        <meshStandardMaterial color={colors.greyDark} roughness={0.7} metalness={2}/>
        </Cylinder>
        <Cylinder scale={[0.9, 0.5, 0.9]} position={[0,.7,0]} ref={cylinderBottomRef}>
            <meshStandardMaterial color={colors.greyDark} roughness={0.7} metalness={2}/>
        </Cylinder>
        <Pallet meshRef={palletRef} scale={.2} position={[-0.7,.12,0]} rotation={[0,0,0]}/>
    </mesh>
  )
}

export default DataSkid