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
              <img src="st_ds.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">东胜城区</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">{this.props.current_time} 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">24.6 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 25.9 ℃</li>
                      <li><Icon type="arrow-down" /> 17.7 ℃</li>
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
                      <h1 className="tem-word">&nbsp;&nbsp;10 mm</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西北风</li>
                        <li>2.5 m/s</li>
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
              <img src="st_bjh.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">泊江海</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">{this.props.current_time} 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">24.8 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 25.5 ℃</li>
                      <li><Icon type="arrow-down" /> 17.9 ℃</li>
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
                      <h1 className="tem-word">&nbsp;&nbsp;8 mm</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>东北风</li>
                        <li>2.0 m/s</li>
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
              <img src="st_slek.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">色连二矿</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">{this.props.current_time} 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">24.0 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 24.1 ℃</li>
                      <li><Icon type="arrow-down" /> 17.8 ℃</li>
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
                      <h1 className="tem-word">&nbsp;&nbsp;8 mm</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西北风</li>
                        <li>3.0 m/s</li>
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
              <img src="st_ysmk.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">永顺煤矿</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">{this.props.current_time} 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">28.1 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 29.4 ℃</li>
                      <li><Icon type="arrow-down" /> 18.6 ℃</li>
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
                      <h1 className="tem-word">&nbsp;&nbsp;8 mm</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西南风</li>
                        <li>0.7 m/s</li>
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
              <img src="st_tlh.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">特拉壕煤矿</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">{this.props.current_time} 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">24.4 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 26.5 ℃</li>
                      <li><Icon type="arrow-down" /> 15.9 ℃</li>
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
                      <h1 className="tem-word">&nbsp;&nbsp;8 mm</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西北风</li>
                        <li>3.0 m/s</li>
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
              <img src="st_mdmk.jpeg" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">明达煤矿</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">{this.props.current_time} 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">25.7 ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> 28.4 ℃</li>
                      <li><Icon type="arrow-down" /> 14.2 ℃</li>
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
                      <h1 className="tem-word">&nbsp;&nbsp;0 mm</h1>
                    </Col>
                    <Col span={4}>
                      <Icon type="tag" style={{fontSize: 30,color: '#08c'}} spin="True" className="station-wind"/>
                    </Col>
                    <Col span={8}>
                      <ul className="station-wind-word">
                        <li>西北风</li>
                        <li>2.8 m/s</li>
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
    map_url: 'http://10.66.16.42/api/index.php?service=Ground.Temp&type=tem&qi=2',
    map_type: 1,
    date: '',
    hour_time: new Date().getHours(),
    minutes_time: new Date().getMinutes(),
    current_time: new Date().getHours() + ":" + new Date().getMinutes(),
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

  getCurrentTime = () => {
    var date_object = new Date()

    var hour_time = date_object.getHours();
    if (parseInt(hour_time) < 10){
      hour_time = '0' + hour_time.toString()
    }

    var minutes_time = date_object.getMinutes();
    if (parseInt(minutes_time) < 10){
      minutes_time = '0' + minutes_time.toString()
    }
    var multiple = Math.floor(parseInt(minutes_time, 10) / 10) * 10;
    if (parseInt(multiple) < 10){
      multiple = '0' + multiple.toString()
    }

    var time_list = new Array();
    time_list['hour_time'] = hour_time;
    time_list['minutes_time'] = minutes_time;
    time_list['multiple'] = hour_time + ":" + multiple;
    return time_list;
  }

  componentDidMount(){
    var current_date = this.getDate();
    this.setState({
      date: current_date,
    });

    this.timer1 = setInterval(
      ()=>{
        var time_list = this.getCurrentTime()

        this.setState({
          hour_time: time_list['hour_time'],
          minutes_time: time_list['minutes_time'],
          current_time: time_list['multiple'],
        });
      }
      , 60000);

    this.timer2 = setInterval(
      ()=>{
        switch (this.state.map_type) {
          case 1:
            this.setState({
              map_type: 2,
              map_url: "http://10.66.16.42/api/index.php?service=Ground.Temp&type=tem&qi=2"
            });
            break;
          case 2:
            this.setState({
              map_type: 3,
              map_url: "http://10.66.16.42/api/index.php?service=Ground.Temp&type=pre&qi=2"
            });
            break;
          case 3:
            this.setState({
              map_type: 1,
              map_url: "http://10.66.16.42/api/index.php?service=Ground.Temp&type=win&qi=2"
            });
            break;
          default:
            break;
        }
      },
      60000,
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
              <Col span={5}>
                <img src="yj.png" className="yj-img"/>
              </Col>
              <Col span={5}>
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
            <div className="yj-info">
            <marquee className="yj-words" direction="left" scrollamount="5" scrolldelay="100">2017年8月2日17时发布东胜区未来24小时天气预报：晴，西风3-4级，气温18～28℃。晴日“烤”验。【东胜区气象台】</marquee>
            </div>
            <div className="title_tip">
              <span class="title_tip_font">自动站实况</span>
            </div>
            <WheatherStation current_time={this.state.current_time}/>
          </Content>
          <Footer className="footer">
            <span className="footer-word">Copyright © 2017 东胜区气象局 & 东胜区煤炭局</span>
          </Footer>
        </Layout>
    );
  }
}

export default Main;
