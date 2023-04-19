import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

const Shell = styled.div.attrs({
    className:"rounded-full h-6 w-16 p-1 border-2 border-white flex"
})``;

const Bean = styled.div.attrs({
    className:"rounded-full h-full my-auto w-6 bg-white"
})``;

function Loading() {
  return (
    <Shell>
        <motion.div
            animate={{
                x: [0,28,0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
            }}
            className='rounded-full h-full my-auto w-6 bg-white'
        />
    </Shell>
  )
}

export default Loading