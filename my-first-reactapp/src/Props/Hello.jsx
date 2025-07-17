import React from 'react'

const Hellow = (props)=>{
    console.log(props)
    return(
        <div>
             <h1>Hello {props.name}</h1>
             <h2>Welcome back {props.name}</h2>
        </div>
    );
}
export default Hellow