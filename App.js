import React from 'react';
import ReactDOM from 'react-dom/client';

const App=()=>{
    return(
        <>
        
       <div>Jai Mata Di</div>
    
    </>
    );
}
// Multiple root elements and render are possible
const root1=ReactDOM.createRoot(document.getElementById("root1"));
const root2=ReactDOM.createRoot(document.getElementById("root2"));
root1.render(<App />)
root2.render(<App />)
root2.render(<h1>Jai Bhavani</h1>)