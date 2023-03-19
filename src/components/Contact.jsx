import React from 'react'
import styled from 'styled-components'

const Section = styled.div.attrs({
  className:"h-screen snap-center"
})``;

const Container = styled.div.attrs({
  className:"w-full flex justify-between gap-8"
})``;

const Left = styled.div.attrs({
  className:"w-1/2 flex items-center justify-center"
})``;

const Title = styled.h2.attrs({
  className:""
})``;

const Form = styled.form.attrs({
  className:"w-96 flex flex-col"
})``;

const Input = styled.input.attrs({
  className:""
})``;

const TextArea = styled.textarea.attrs({
  className:""
})``;

const Button = styled.button.attrs({
  className:""
})``;

const Right = styled.div.attrs({
  className:"w-1/2"
})``;

function Contact() {
  return (
    <Section className='h-screen snap-center'>
      <Container>
        <Left>
          <Form>
            <Title>Contact Me</Title>
            <Input placeholder="Name"/>
            <Input placeholder='Email'/>
            <TextArea placeholder='Write your message'/>
          </Form>
        </Left>
      </Container>
    </Section >
  )
}

export default Contact