import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div.attrs({
  className:'h-screen snap-center flex flex-col items-center'
})``;

const Container = styled.div.attrs({
  className:'h-screen flex justify-between items-center w-full'
})``;

const Left = styled.div.attrs({
  className:'w-1/3 flex flex-col gap-5'
})``;
const Right = styled.div.attrs({
  className:'w-2/3 relative'
})``;

const Title = styled.h1.attrs({
  className:'text-left'
})``;
const WhatIDo = styled.div.attrs({
  className:'flex items-center'
})``;
const Subtitle = styled.h2.attrs({
  className:'text-cyan-400 text-2xl'
})``;
const Line = styled.div.attrs({
  className:"rounded-full h-1 w-6 border-2 border-cyan-400 mr-2"
})``;

const Image = styled.img.attrs({
  src:"./img/robot2.png",
  className:"h-96 m-auto absolute object-contain top-0 bottom-0 left-0 right-0"
})`
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`;

const Button = styled.button.attrs({
  className:"w-10 w-max p-2 px-8 bg-teal-800 text-white rounded-md shadow-md"
})``;

const Explainer = styled.p.attrs({
  className:''
})``;

function Hero() {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Make.</Title>
          <Title>Collect.</Title>
          <Title>Analyze.</Title>
          <WhatIDo>
            <Line/>
            <Subtitle>What I do...</Subtitle>
          </WhatIDo>
          <Explainer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat aut, velit ipsum veritatis minima dolor omnis tempora expedita consequuntur tenetur maxime atque libero, molestiae natus culpa. Nam, cupiditate eum.
          </Explainer>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/*3d model*/}
          <Image></Image>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero