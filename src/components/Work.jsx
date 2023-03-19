import React from 'react'
import styled from 'styled-components'

const data = [
  "Development",
  "Engineering",
  "Analysis",
  "Design",
  "Automation",
];

const Section = styled.div.attrs({
  className:"h-screen snap-center flex justify-center"
})``;

const Container = styled.div.attrs({
  className:"flex justify-between object-contain w-full"
})``;

const Left = styled.div.attrs({
  className:"w-1/2 flex items-center"
})``;

const List = styled.ul.attrs({
  className:"list-none flex flex-col gap-5 relative"
})``;

const ListItem = styled.li.attrs({
  className:"text-7xl font-bold cursor-pointer text-transparent relative"
})`
  -webkit-text-stroke: 1px white;
  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 0;
    color: white;
  }

  &:hover{
    ::after{
      animation: moveText 500ms ease-out both;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
  `;

const Right = styled.div.attrs({
  className:"w-1/2 flex"
})``

function Work() {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item, idx)=> (
              <ListItem key={item-idx} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Work