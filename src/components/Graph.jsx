import React, {useRef, useEffect, useState} from 'react';
import RoundedExtrude from './RoundedExtrude';
import { Box, Plane, Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import colors from '../assets/colors';

function Bar(props) {
    const barRef = useRef();

    useFrame((state) => {
        barRef.current.scale.z = Math.abs(Math.sin(state.clock.elapsedTime/2 + props.phase));
        barRef.current.position.z = 0.5 + Math.abs(Math.sin(state.clock.elapsedTime/2 + props.phase) * props.height / 2);
    })
    return(
        <Box args={[1,1,props.height]} position={props.position} ref={barRef}>
            <meshStandardMaterial color={colors.greenMedium}/>
        </Box>
    )
}

Bar.defaultProps = {
    height: 1,
    phase: 0,
    position: [0,0,0],
}

function Graph() {
    const lineRef = useRef();
    const [scale, setScale] = useState(0.3);
    const [position, setPosition] = useState([-1.5,0,0]);
  
  useEffect(() => {
    // Detect the screen size and set the mesh scale accordingly
    if (window.innerWidth < 768){
      setScale(.5);
      setPosition([-2.5,0,0]);
    }else if (window.innerWidth < 1024){
      setScale(0.3);
      setPosition([-1.5,0,0]);
    }
  }, [window.innerWidth])
    {/*
    useFrame((state) => {
        lineRef.current.rotation.z = Math.sin(state.clock.elapsedTime)
    })
    */}
  return (
    <mesh position={position} scale={scale} rotation={[-0.8,0,0.5]}>
        <Bar height={3} position={[1,3,2]} />
        <Bar height={4} position={[2.5,3,2.5]} phase={Math.PI/3}/>
        <Bar height={1} position={[4,3,1]} phase={Math.PI/4}/>
        <Bar height={3} position={[5.5,3,2]} phase={Math.PI/5}/>
        <Bar height={2} position={[7,3,1.5]} />
        <RoundedExtrude
            position={[0,2,0]}
            width={8}
            length={2}
            cornerRad={0.5}
            depth={0.2}
            color={colors.white}
        />
        <RoundedExtrude
            position={[0,-6, 0]}
            width={8}
            length={7}
            cornerRad={0.5}
            depth={0.3}
            color={colors.white}
        />
        <Plane position={[4,-1.5,0.5]}  args={[7,4]}>
            <meshStandardMaterial color={colors.greenLight}/>
        </Plane>
        <Line
            ref={lineRef}
            worldUnits
            points={[[1,-1,0.7],[2.5,0,0.7],[4,-3,0.7],[5.5,-1,0.7],[7,-2,0.7]]}
            color={colors.greenMedium}
            lineWidth={0.05} />
        <RoundedExtrude
            position={[0.4,-5.7,0.4]}
            width={3.4}
            length={1.9}
            cornerRad={0.2}
            depth={0.2}
            color={colors.greenMedium}
        />
        <RoundedExtrude
            position={[4.2,-5.7,0.4]}
            width={3.4}
            length={1.9}
            cornerRad={0.2}
            depth={0.2}
            color={colors.greenMedium}
        />
    </mesh>
    )
}

export default Graph