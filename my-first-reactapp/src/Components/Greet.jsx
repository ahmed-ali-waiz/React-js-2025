import React from 'react'

function Greet(props){
    return(
         <div>
            <h1>Hello {props.name}</h1>
         <h2> My age is {props.age} </h2> 
         </div>   
             );
}
export default Greet