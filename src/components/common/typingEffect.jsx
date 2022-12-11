// import axios from 'axios';
import React from 'react'
import { Stack } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import ReactTypingEffect from 'react-typing-effect';
 
export default function ReactTypingEffectDemo  () {
  return (
    <Stack className='p-5'>
      <ReactTypingEffect
        text={["Hiring?", "I am available."]}
        speed='200ms'
        eraseSpeed='100ms'
        staticText="$: "
      />
 

      </Stack>
  );
};





