import { Component, StrictMode } from 'react';
import './app.scss';
import Logo from './Logo';
import ContentBox from './ContentBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logoDeploy: false
    }
  }
  
  deployLogo = () => { // funkcja wywoływana gdy komponent zostanie zamontowany i stan logo deploy zostanie zmieniony na true
    const {logoDeploy} = this.state;
    const landingLogo = document.querySelector('.landing-logo');
    const underLogo = document.querySelector('.under-logo');
    if(logoDeploy===true) {
      setTimeout(() => {
        landingLogo.style.top= '0px';
      }, 700)
      setTimeout(()=>{
        underLogo.style.top= '0px';
      }, 500)
    } else {
      console.log('nic')
    }
  }

  componentDidMount() {
    this.setState({logoDeploy: true}, () => this.deployLogo());
  }

  render() {
    return(
      <StrictMode>
        <Logo />
        <ContentBox />
      </StrictMode>
    )
  }
}

export default App;
