import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTypingEffect from 'react-typing-effect';
 
const ReactTypingEffectDemo = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Hiring?", "I am available."]}
        speed='200ms'
        eraseSpeed='100ms'
        staticText="$: "
      />
 
      <br />
    </>
  );
};

ReactDOM.render(<ReactTypingEffectDemo />, document.getElementById('auto-text'))



// my project previews

const ProjectPreviews=()=>{
  // const [response, setResponse] = React.useState({title: '', description: '', url: '', image: ''})

    // React.useEffect(()=>{
    //   let xhr = new XMLHttpRequest();
    //   xhr.open('get', 'https://api.linkpreview.net/?key=5698725e02364df120313a39166c986d&fields=title,description,image,url,locale,icon&q=https://a-closer-look.com/solutions/customer-ambassador-program/');
    //   xhr.send();
    
    //   xhr.onload = function() {
    //     console.log(xhr.response)
    //     setResponse(xhr.response)
    //   };
    // }, [response])

    const responses = [
      {"title":"Customer Ambassador Program",
    "description":"GET CLOSER TO YOUR How Close Are You to Your Customer? The Customer Ambassador Program (CAP), powered by A Closer Look, empowers you to get closer to your ultimate source of truth – your customer. With our innovative SMS-based solution, you gain real-time feedback from consumers while they interact with your brand, regardless of purchase....",
    "image":"https://a-closer-look.com/wp-content/uploads/2020/06/iStock-1128400082.jpg",
    "url":"https://a-closer-look.com/solutions/customer-ambassador-program/"},
    
    ]
  


    return (
      <>
      { responses.map(response=>
        <div className="card m-3" style={{width : '400px'}}>
          <header className="card-header">
            <p className="card-header-title is-size-3 has-text-centered">
              {response ? response.title : ''}
            </p>            
          </header>
          <div className="card-content">
            <div className='card-image'>
            <figure className="image">
              <img src={response && response.image}/>
            </figure>
            </div>
         

            <div className="content">
              {response && response.description}
              <a target="_blank" href={response &&  response.url}>{ response && response.url}</a>.
              <br />
              
            </div>
          </div>
          <footer className="card-footer">
            
          </footer>
        </div>
        )
      }
      
      </>

    )
}

ReactDOM.render(<ProjectPreviews />, document.getElementById('projects'))


