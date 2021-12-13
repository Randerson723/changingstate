
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count:0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // this.handleClick corrects error of setState undefined
  
  // Creating a method to change the state
  // You dont want to directly modify state with the {this.state}:method}....use this.setSate
  
  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    // continuously adds to prevstate enabling the counter to maintain their data,
    //  and change data wich increases the counter
  }
  
  
  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>


      </div>
    )
  }
  
}
////        <ChildComponent count={this.state.count} if Child is defined then
//     Component reflects the new version of props its receiving
//      Iit will change every time the state.count changes when button is clicked
/// export default App
