import React from 'react'
import styled from 'styled-components'
import MapChart from './MapChart';

const Section = styled.div.attrs({
  className:"h-screen snap-center"
})``;

const Container = styled.div.attrs({
  className:"w-full flex justify-between h-full"
})``;

const Left = styled.div.attrs({
  className:"flex-1"
})``;

const Title = styled.h2.attrs({
  className:""
})``;

const Form = styled.form.attrs({
  className:"w-96 flex flex-col gap-5"
})``;

const Input = styled.input.attrs({
  className:"relative block w-full shadow-md rounded-md border-0 p-3 text-gray-900 placeholder:text-gray-400 sm:text-sm"
})``;

const TextArea = styled.textarea.attrs({
  className:"relative block w-full shadow-md rounded-md border-0 p-3 text-gray-900 placeholder:text-gray-400 sm:text-sm h-64"
})``;

const Button = styled.button.attrs({
  className:"p-2 bg-violet-800 text-white rounded-md shadow-md"
})``;

const Right = styled.div.attrs({
  className:"flex-1 flex justify-end items-center pr-12"
})``;

const handleSubmit = e =>{
  e.preventDefault();
}

function Contact() {
  return (
    <Section className='h-screen snap-center'>
      <Container>
        <Left>
          <MapChart/>
        </Left>
        <Right>
        <Form onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name"/>
            <Input placeholder='Email' type='email'/>
            <TextArea placeholder='Write your message' rows={10}/>
            <Button>Send</Button>
          </Form>
        </Right>
      </Container>
    </Section >
  )
}

export default Contact