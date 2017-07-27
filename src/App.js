import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout  , Row , Col } from 'antd';
import LunarUtil from './LunarUtil.js';

const { Header, Footer, Content} = Layout;
let cDate = LunarUtil.today();
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

class WheatherMap extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <iframe src={this.props.map_url} className="map"></iframe>
    );
  }
}

class Main extends Component {
  state = {
    map_url: "http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=tem&qi=1",
    map_type: 1,
    years: new Date().getFullYear(),
    hour_time: new Date().getHours(),
    minutes_time: new Date().getMinutes(),
    seconds_time:new Date().getSeconds(),
  }

  componentDidMount(){
    this.timer1 = setInterval(
      ()=>{
        this.setState({
          hour_time: new Date().getHours(),
          minutes_time: new Date().getMinutes(),
          seconds_time:new Date().getSeconds(),
        });
      }
      , 1000);

    this.timer2 = setInterval(
      ()=>{
        switch (this.state.map_type) {
          case 1:
            this.setState({
              map_type: 2,
              map_url: "http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=pre&qi=1"
            });
            break;
          case 2:
            this.setState({
              map_type: 3,
              map_url: "http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=win&qi=1"
            });
            break;
          case 3:
            this.setState({
              map_type: 1,
              map_url: "http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=tem&qi=1"
            });
            break;
          default:
            break;
        }
      },
      20000,
    );
  }

  render() {
    return (
        <Layout>
          <Header>
            <Row>
              <Col span={13}>
                <ul>
                  <li><h1 className="header_title">风雨相守&nbsp;&nbsp;冷暖相知</h1></li>
                  <li><p className="header_title_py">Wheather Information Service</p></li>
                </ul>
              </Col>
              <Col span={4}>无预警</Col>
              <Col span={7}>
                <div className="nl_time">农历 {cDate}</div>
                <div><span className="current_time">{this.state.hour_time}</span><span className="time_charactor">:</span><span className="current_time">{this.state.minutes_time}</span><span className="time_charactor">:</span><span className="current_time">{this.state.seconds_time}</span></div>
                <div className="">这是第三行</div>
              </Col>
            </Row>
          </Header>
          <Content>
            <WheatherMap map_url={this.state.map_url}/>
          </Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
    );
  }
}

export default Main;
