import React, {useRef, useEffect, useState} from 'react';
import { Cylinder, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Pallet from './Pallet';
import colors from '../assets/colors';

function DataSkid() {
    const cylinderBottomRef = useRef(null);
    const cylinderMiddleRef = useRef(null);
    const cylinderTopRef = useRef(null);
    const palletRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState([0,-1,0]);
  
  useEffect(() => {
    // Detect the screen size and set the mesh scale accordingly
    if (window.innerWidth < 768){
      setScale(1);
      setPosition([0,-1,0]);
    }else if (window.innerWidth < 1024){
      setScale(1);
      setPosition([0,-1,0]);
    }
  }, [window.innerWidth])
  
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
    <mesh position={position} rotation={[0,Math.PI/4,0]} scale={scale}>
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
        <Text
          color="white" 
          fontSize={0.2}
          maxWidth={2.5}
          lineHeight={1}
          letterSpacing={-0.02}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
          fillOpacity={1}
          strokeWidth={'2.5%'}
          strokeColor="#ffffff"
          position={[0,-0.7,0]}
          rotation={[0,-Math.PI/4,0]}
        >
        Start considering the value of product beyond its price.
        Actionable information is produced at every stage of production.
        </Text>
    </mesh>
  )
}

export default DataSkid