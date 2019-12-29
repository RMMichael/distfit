import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function App() {
  return (
    <div className="App">
      <CycleNames/>
    </div>
  );
}

//takes array of strings and cycles them on timer
class CycleNames extends React.Component{
  constructor(props) {
    super(props);
    this.state = {ind: 0, names: ["Exponential","Uniform",'"Normal"'] };
  }
  componentDidMount() {
    this.timerID = setInterval(()=>this.update(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  update() {
    this.setState((state, props) => ({
      ind: (state.ind + 1) % this.state.names.length
    }));
  }

  render(){
    return(
        <ReactCSSTransitionGroup>
          <div>
            <h1>{this.state.names[this.state.ind]}</h1>
          </div>
        </ReactCSSTransitionGroup>
    )
  }
}


export default App;
