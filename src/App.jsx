import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Work from "./components/Work"
import './index.css'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className:'h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-gradient-to-r from-green-800 to-teal-600 text-white'
})`
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <div className="w-full md:w-10/12 mx-auto">
      <Hero/>
      <Work/>
      <Contact/>
      </div>
    </Container>
  )
}

export default App
