import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

const Shell = styled.a.attrs({
    className:"rounded-full h-12 w-6 p-1 border-2 border-white flex hover:cursor-pointer md:hidden"
})``;

function ScrollIcon(props) {
  return (
    <Shell href={props.href}>
        <motion.div
            animate={{
                y: [8,-8],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
            }}
            className='rounded-full h-4 my-auto w-full bg-white'
        />
    </Shell>
  )
}

export default ScrollIcon