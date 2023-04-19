import React, { useState } from 'react'
import styled from 'styled-components'
import work_sections from "../assets/work_sections.jsx"

const Section = styled.div.attrs({
  className:"h-screen snap-center flex justify-center px-4 md:w-10/12 mx-auto"
})``;

const Container = styled.div.attrs({
  className:"flex-col md:flex-row flex md:justify-between object-contain w-full h-full"
})``;

const Left = styled.div.attrs({
  className:"flex-1 flex items-top pt-8 md:p-0 md:items-center justify-center md:justify-left"
})``;

const List = styled.ul.attrs({
  className:"list-none flex flex-col gap-1 md:gap-5 relative"
})``;

const ItemHeading = styled.div.attrs({
  className:"text-4xl md:text-7xl font-bold cursor-pointer text-transparent relative w-max mx-auto md:mx-0"
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
      animation: moveText 800ms ease-in both;

      @keyframes moveText {
        to{
          width: 100%;
          overflow: visible;
        }
      }
    }
  }
  `;

  const ItemText = styled.p.attrs({
    className:"md:text-xl text-sm text-white text-center md:text-left"
  })``;

  const ListItem = styled.li.attrs({
    className:"relative"
  })``;

const Right = styled.div.attrs({
  className:"flex flex-1 items-bottom pb-8 md:p-0 md:items-center"
})``

function Work() {
  const [work, setWork] = useState(work_sections[0])

  return (
    <Section id="work-id">
      <Container>
        <Left>
          <List>
            {work_sections.map((item, idx)=> (
              <ListItem>
              {/* q: How to I set the hover state of an element on page load */
              }
              <ItemHeading
                key={item.title}
                text={item.title}
                onClick={()=>{setWork(item) }}
                >
                  {item.title}
              </ItemHeading>
              <ItemText>
                {work.title === item.title && item.text}
              </ItemText>
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