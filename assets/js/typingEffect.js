import React from 'react'
import ReactDOM from 'react-dom'
import ReactTypingEffect from 'react-typing-effect';
 
const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Available to work"]}
        speed='200ms'
        eraseSpeed='100ms'
        staticText="$: "
      />
 
      <br />
    </>
  );
};

ReactDOM.render(<ReactTypingEffectDemo />, document.getElementById('auto-text'))
