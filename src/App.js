import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled, {keyframes} from 'styled-components'

const relDiv = styled.div`
  position: relative;
`;

const HeadText = styled.p`
  position: absolute;
  animation: ${props => props.out ? fadeIn : fadeOut} 1000ms linear forwards;
//transition: opacity 10ms ease-out;
`;

const fadeIn = keyframes`
  from{
    opacity: .1%;
  }to{
    opacity: 100%;
  }
`;
const fadeOut = keyframes`
  from{
    opacity: 100%;
  }to{
    opacity: .1%;
  }
`;

function App() {
  return (
    <div className="App">
      <div>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col class="C1" xs={12} md={8}>
              <CycleNames/>
            </Col>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
          </Row>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
          </Row>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <Row>
            <Col xs={6}>xs=6</Col>
            <Col xs={6}>xs=6</Col>
          </Row>
        </Container>
      </div>
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
    /*const names = <p key={this.state.ind}>{this.state.names[this.state.ind]}</p>;
    return (
       <HeadText>
         {names}
       </HeadText>
    )*/
    const names = this.state.names.map((text, ind) => (
        <relDiv>
        <HeadText out={ind === this.state.ind}>
          is your data {text}
        </HeadText>
        </relDiv>
    ));
    return (
        <relDiv>
          {names}
        </relDiv>
    )
  }
}


export default App;
