import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class Main extends Component {
  render() {
    return (
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
    );
  }
}

export default Main;
