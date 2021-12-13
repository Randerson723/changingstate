import React from "react";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        }); 
    }   
/// makes a counter or recordable event....can run in background or appear in fron of user


    /// Basic Component(state) Boiler Plate: Need to save this into VsCode()---Class to count
//// h1 property holds state, above state is set to 0, handleClick is a function/(counter) that records event
// count then starts increasing by one using the state method under handleClick
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onMouseMove={this.handleClick}>Change!</button>
            </div>

        )
    }

}
///From Render to the last div(5 lines)Basic Method Boiler Plate for state
/// Need to save into Vscode with a Synthetic Event like onMouseMove can change
///State with the event, and interact with the users

 

export default App