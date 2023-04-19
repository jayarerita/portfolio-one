import React, { Children } from 'react'
import styled from 'styled-components'

const Section = styled.div.attrs({
  className:'w-full flex justify-center'
})``;

const Container = styled.div.attrs({
  className:'w-full p-4 flex justify-between gap-5 my-auto items-center'
})``;

const Links = styled.div.attrs({
  className:"flex gap-5 items-center"
})``;

const Icons =styled.div.attrs({
  className:"flex items-center gap-2"
})``;

const Logo = styled.img.attrs({
  className:"h-12",
  src:"./img/logo-white.png"
})``;

const Icon = styled.img.attrs({
  src:"./img/search.png",
  className:"w-5 cursor-pointer"
})``;

const Button = styled.button.attrs({
  className:"w-10 w-max p-2 text-white rounded-md shadow-md bg-greenDark"
})``;

const List = styled.ul.attrs({
  className:"hidden md:flex gap-5 align-middle list-none"
})``;

const ListItem = styled.li.attrs({
  className:"cursor-pointer"
})``;


function Navbar() {
  return (
    <Section >
      <Container>
        <Links>
          <Logo/>
          <List>
            <ListItem>Home</ListItem>
            {/*<ListItem>Blog</ListItem>*/}
            <ListItem>
              <a href="#work-id">Work</a>
            </ListItem>
          </List>
        </Links>
        <Icons>
          {/*<Icon/> Search not implemented yet*/}
          <Button>
            <a href="#contact-id">Contact Me</a>
          </Button>
        </Icons>
        
      </Container>
    </Section>
  )
}

export default Navbar