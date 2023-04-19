import React from 'react'
import { Box } from '@react-three/drei'
import colors from '../assets/colors'

function Pallet(props) {
  const topBoards = [
    {x:0,y:1,z:0},
    {x:1.2,y:1,z:0},
    {x:2.4,y:1,z:0},
    {x:3.6,y:1,z:0},
    {x:4.8,y:1,z:0},
    {x:6.0,y:1,z:0},
    {x:7.2,y:1,z:0},
  ];
  const stringerBoards = [
    {x:3.6,y:0.4,z:4.8},
    {x:3.6,y:0.4,z:0},
    {x:3.6,y:0.4,z:-4.8},
  ];
  const bottomBoards = [
    {x:0,y:-0.2,z:0},
    {x:3.6,y:-0.2,z:0},
    {x:7.2,y:-0.2,z:0},
  ];

  return (
    <mesh ref={props.meshRefs} position={props.position} scale={props.scale} rotation={props.rotation}>
        {topBoards.map((board, idx) => (
            <Box args={[1,0.2,10]} position={[board.x, board.y, board.z]}>
                <meshStandardMaterial color={colors.greenDark}/>
            </Box>
        ))}
        {stringerBoards.map((board, idx) => (
            <Box args={[8.2,1,0.4]} position={[board.x, board.y, board.z]}>
                <meshStandardMaterial color={colors.greenDark}/>
            </Box>
        ))}
        {bottomBoards.map((board, idx) => (
            <Box args={[1,0.2,10]} position={[board.x, board.y, board.z]}>
                <meshStandardMaterial color={colors.greenDark}/>
            </Box>
        ))}

    </mesh>
  )
}

export default Pallet
