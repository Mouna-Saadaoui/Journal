import * as React from "react";  

const App =()=>{  
  return ( 
    <div> 
      
    <h1>Free your mind </h1>   
     
    <Page/>
    </div>
  )
} 
const Page = ()=>{  
  const [writing, setWriting]= React.useState(''); 
  const handleChange=(event)=>{ 
    setWriting(event.target.value);
  };
  
  return( 
    <div> 
      <input type='text' value={writing} onChange={handleChange}/>  
      <p><strong>{writing}</strong></p>

    </div>
  )
} 
export default App;