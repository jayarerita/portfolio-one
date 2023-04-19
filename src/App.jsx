import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Work from "./components/Work"
import './index.css'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className:'w-screen h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-gradient-to-r from-[#1C1C1C] to-[#494949] text-white'
})`
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <Work/>
      <Contact/>
    </Container>
  )
}

export default App
