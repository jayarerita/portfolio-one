import React, { useState } from 'react'
import styled from 'styled-components'
import work_sections from "../assets/work_sections.jsx"

const Section = styled.div.attrs({
  className:"h-screen snap-center flex justify-center w-10/12 mx-auto"
})``;

const Container = styled.div.attrs({
  className:"flex justify-between object-contain w-full"
})``;

const Left = styled.div.attrs({
  className:"flex-1 flex items-center"
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
  className:"flex flex-1 h-max my-auto"
})``

function Work() {
  const [work, setWork] = useState(work_sections[0])

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {work_sections.map((item, idx)=> (
              <ListItem
                key={item.title}
                text={item.title}
                onClick={()=>{setWork(item)}}>
                  {item.title}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work.displayComponent}
        </Right>
      </Container>
    </Section>
  )
}

export default Work