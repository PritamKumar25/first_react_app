import React from "react";

class Welcome extends React.Component{
    render(){
        this.newMethHead();
        return (
            <h1>Hello {this.props.name} from Welcome.js using class component</h1> //it is not html it is jsx
        )
    }

    newMethHead() {
        console.log(this.props)
    }
}

export default Welcome