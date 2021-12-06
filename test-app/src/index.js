import React, {Component} from "react";
import ReactDOM from 'react-dom';


// User Defined Components
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';


class App extends Component {
  render() {
    const myprops = {
      title: "My Cool App",
      color: "Red"
    }

    return (
    <div className="app">
          <AppHeader {...myprops} />
          <AppContent/>
      <AppFooter />
    </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('root'));