import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout  , Row , Col ,Icon} from 'antd';
import LunarUtil from './LunarUtil.js';

const { Header, Footer, Content} = Layout;
let cDate = LunarUtil.today();

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

class WheatherStation extends Component{
  render(){
    return(
      <div>
        <div className="station-info">
          <Row>
            <Col span={10}>
              <img src="xj.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">九城宫四社</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">10:45 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">10.0 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 28.5 ℃</li>
                      <li><Icon type="arrow-down" /> 9.5 ℃</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="station-rain-wind">
                <Row>
                    <Col span={4}>
                      <img src="rain.png" className="station-rain"/>
                    </Col>
                    <Col span={8}>
                      <h1 className="tem-word">&nbsp;&nbsp;29 %</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西北风</li>
                        <li>1.2 m/s</li>
                      </ul>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="station-info">
          <Row>
            <Col span={10}>
              <img src="xj.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">特拉壕</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">10:45 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">12.3 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 25.5 ℃</li>
                      <li><Icon type="arrow-down" /> 3.2 ℃</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="station-rain-wind">
                <Row>
                    <Col span={4}>
                      <img src="rain.png" className="station-rain"/>
                    </Col>
                    <Col span={8}>
                      <h1 className="tem-word">&nbsp;&nbsp;36 %</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>东风</li>
                        <li>1.2 m/s</li>
                      </ul>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="station-info">
          <Row>
            <Col span={10}>
              <img src="xj.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">罕台川</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">10:45 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">15.3 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 24.7 ℃</li>
                      <li><Icon type="arrow-down" /> 6.5 ℃</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="station-rain-wind">
                <Row>
                    <Col span={4}>
                      <img src="rain.png" className="station-rain"/>
                    </Col>
                    <Col span={8}>
                      <h1 className="tem-word">&nbsp;&nbsp;27 %</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西南风</li>
                        <li>1.6 m/s</li>
                      </ul>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="station-info">
          <Row>
            <Col span={10}>
              <img src="xj.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">巴彦敖包</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">10:45 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">8.0 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 27.5 ℃</li>
                      <li><Icon type="arrow-down" /> 4.1 ℃</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="station-rain-wind">
                <Row>
                    <Col span={4}>
                      <img src="rain.png" className="station-rain"/>
                    </Col>
                    <Col span={8}>
                      <h1 className="tem-word">&nbsp;&nbsp;29 %</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西北风</li>
                        <li>1.2 m/s</li>
                      </ul>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="station-info">
          <Row>
            <Col span={10}>
              <img src="xj.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">布日都梁</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">10:45 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">13.0 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 29.5 ℃</li>
                      <li><Icon type="arrow-down" /> 4.5 ℃</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="station-rain-wind">
                <Row>
                    <Col span={4}>
                      <img src="rain.png" className="station-rain"/>
                    </Col>
                    <Col span={8}>
                      <h1 className="tem-word">&nbsp;&nbsp;29 %</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>东北风</li>
                        <li>0.9 m/s</li>
                      </ul>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="station-info">
          <Row>
            <Col span={10}>
              <img src="xj.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">万利镇</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">10:45 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">10.0 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 28.5 ℃</li>
                      <li><Icon type="arrow-down" /> 9.5 ℃</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="station-rain-wind">
                <Row>
                    <Col span={4}>
                      <img src="rain.png" className="station-rain"/>
                    </Col>
                    <Col span={8}>
                      <h1 className="tem-word">&nbsp;&nbsp;29 %</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西北风</li>
                        <li>1.4 m/s</li>
                      </ul>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}

class Main extends Component {
  state = {
    map_url: 'http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=tem&qi=1',
    map_type: 1,
    date: '',
    hour_time: new Date().getHours(),
    minutes_time: new Date().getMinutes(),
  }

  getDate = () => {
    var mydate = new Date();
    var wday = ''
    switch(mydate.getDay()){
      case 0:
        wday = "星期天";
        break;
      case 1:
        wday =  "星期一";
        break;
      case 2:
        wday =  "星期二";
        break;
      case 3:
        wday =  "星期三";
        break;
      case 4:
        wday =  "星期四";
        break;
      case 5:
        wday =  "星期五";
        break;
      case 6:
        wday =  "星期六";
        break;
    }
    var current_date = mydate.getFullYear() + "-" + (mydate.getMonth() + 1) + "-" + mydate.getDate() + " " + wday;
    return current_date;
  }

  componentDidMount(){
    var current_date = this.getDate();
    this.setState({
      date: current_date,
    });
    this.timer1 = setInterval(
      ()=>{
        this.setState({
          hour_time: new Date().getHours(),
          minutes_time: new Date().getMinutes(),
        });
      }
      , 60000);

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
              <Col span={2}>
                <img src="icon.png" className="img-icon"/>
              </Col>
              <Col span={12}>
                <ul>
                  <li><h1 className="header_title">风雨相守&nbsp;&nbsp;冷暖相知</h1></li>
                  <li><p className="header_title_py">&nbsp;&nbsp;Wheather Information Service</p></li>
                </ul>
              </Col>
              <Col span={4}></Col>
              <Col span={6}>
                <div className="nl_time">农历 {cDate}</div>
                <div className="clock"><span className="current_time">{this.state.hour_time}</span><span className="time_charactor">:</span><span className="current_time">{this.state.minutes_time}</span></div>
                <div className="current_date">{this.state.date}</div>
              </Col>
            </Row>
          </Header>
          <Content>
            <div className="div-frame">
              <WheatherMap map_url={this.state.map_url}/>
            </div>
            <div className="title_tip">
              <span class="title_tip_font">自动站实况</span>
            </div>
            <WheatherStation />
          </Content>
          <Footer className="footer"></Footer>
        </Layout>
    );
  }
}

export default Main;
