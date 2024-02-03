import React from 'react'

//How to write a function in javaScript

// function Greet(){
//     return <h1>Hello Pritam</h1>
// }

//How to write a function in ES6

const Greet = props =>{
    console.log(props)
    return (
    <div>
        <h1>Hello {props.name} from Greet.js file using functional Component</h1>
        {props.children}
    </div>
    ) //it is not html it is jsx
}

// export const Greet = () => <h1>Hello Pritam</h1>


export default Greet