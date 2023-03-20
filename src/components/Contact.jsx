import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import MapChart from './MapChart';
import emailjs from '@emailjs/browser';

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
  className:"flex-1 flex justify-center items-center pr-12"
})``;

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(null);
  const message = useRef();
  const email = useRef();
  const name = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
  
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
        // Clear the inputs
        message.current.value = "";
        email.current.value = "";
        name.current.value = "";
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });
  }
  return (
    <Section className='h-screen snap-center'>
      <Container>
        <Left>
          <MapChart/>
        </Left>
        <Right>
        <Form
          onSubmit={handleSubmit}
          ref={form}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder='Email' type='email' name="email"/>
            <TextArea placeholder='Write your message' rows={10} ref={message} name="message"/>
            <Button>Send</Button>
            {success &&
              "Thanks for reaching out! I'll be in touch soon!"}
          </Form>
        </Right>
      </Container>
    </Section >
  )
}

export default Contact