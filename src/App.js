import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout  , Row , Col ,Icon} from 'antd';
import {today,} from './Lunar.js';
import WheatherStation01 from './type1.js';
import WheatherStation02 from './type2.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';

const { Header, Footer, Content} = Layout;

let LDate = today;

class WheatherMap extends Component{

  render(){
    return (
      <iframe title="map_div" src={this.props.map_url} className="map"></iframe>
    );
  }
}

class Main extends Component {
  state = {
    map_url: 'http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=tem&qi=1',
    map_type: 1,
    date: '',
    alarm_pic: '',
    hour_time: new Date().getHours(),
    minutes_time: new Date().getMinutes(),
    current_time: new Date().getHours() + ":" + new Date().getMinutes(),
    api_data: '[{"TEM_Max": "27", "TEM_Min": "25.8", "PRE_1h": "0", "WIN_D_Avg_10mi": "214", "WIN_S_Avg_10mi": "2", "TEM": "27", "direction": "\u897f\u5357\u98ce"}, {"TEM_Max": "26.7", "TEM_Min": "26.5", "PRE_1h": "0", "WIN_D_Avg_10mi": "154", "WIN_S_Avg_10mi": "3.1", "TEM": "26.7", "direction": "\u4e1c\u5357\u98ce"}, {"TEM_Max": "29.1", "TEM_Min": "27.3", "PRE_1h": "0", "WIN_D_Avg_10mi": "242", "WIN_S_Avg_10mi": "3.4", "TEM": "27.3", "direction": "\u897f\u5357\u98ce"}, {"WIN_D_Avg_10mi": 13.5, "WIN_S_Avg_10mi": 3.0, "TEM": "", "TEM_Max": "", "TEM_Min": "", "PRE_1h": 0, "direction": "\u5317\u98ce"}, {"WIN_D_Avg_10mi": 17.4, "WIN_S_Avg_10mi": 1.7, "TEM": 27.2, "TEM_Max": 27.6, "TEM_Min": 26.3, "PRE_1h": 0, "direction": "\u5317\u98ce"}, {"WIN_D_Avg_10mi": 18.3, "WIN_S_Avg_10mi": 0.0, "TEM": 25.6, "TEM_Max": 25.8, "TEM_Min": 24.1, "PRE_1h": 0, "direction": "\u5317\u98ce"}]',
    weather_data: '',
    cDate: LDate,
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
      default:
        break;
    }
    var current_date = mydate.getFullYear() + "-" + (mydate.getMonth() + 1) + "-" + mydate.getDate() + " " + wday;
    return current_date;
  }

  getCurrentTime = () => {
    var date_object = new Date()

    var hour_time = date_object.getHours();
    if (parseInt(hour_time,10) < 10){
      hour_time = '0' + hour_time.toString()
    }

    var minutes_time = date_object.getMinutes();
    if (parseInt(minutes_time,10) < 10){
      minutes_time = '0' + minutes_time.toString()
    }
    var multiple = Math.floor(parseInt(minutes_time, 10) / 10) * 10;
    if (parseInt(multiple,10) < 10){
      multiple = '0' + multiple.toString()
    }

    var time_list = [];
    time_list['hour_time'] = hour_time;
    time_list['minutes_time'] = minutes_time;
    time_list['multiple'] = hour_time + ":" + multiple;
    return time_list;
  }

  componentDidMount(){
    fetch("weatherData.json").then((responce) => {
      return responce.json();
    }).then((data) => {
      this.setState({
        weather_data: data,
      });
    }).catch((error) => {
      console.log('request faild:', error);
    })

    fetch("alarmInfo.json").then((responce) => {
      return responce.json();
    }).then((data) => {
      this.setState({
        alarm_pic: data['data'],
      });
    }).catch((error) => {
      console.log('request faild:', error);
    })

    var current_date = this.getDate();
    this.setState({
      date: current_date,
    });

    this.timer1 = setInterval(
      ()=>{
        var time_list = this.getCurrentTime();

        this.setState({
          hour_time: time_list['hour_time'],
          minutes_time: time_list['minutes_time'],
          current_time: time_list['multiple'],
          cDate: LDate,
          date: this.getDate(),
        });
      }
      , 60000);

    this.timer2 = setInterval(
      ()=>{
        switch (this.state.map_type) {
          case 1:
            this.setState({
              map_type: 2,
              map_url: "http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=tem&qi=1"
            });
            break;
          case 2:
            this.setState({
              map_type: 3,
              map_url: "http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=pre&qi=1"
            });
            break;
          case 3:
            this.setState({
              map_type: 1,
              map_url: "http://qx.zzgge.com:8001/api/index.php?service=Ground.Temp&type=win&qi=1"
            });
            break;
          default:
            break;
        }
      },
      300000,
    );

    this.timer3 = setInterval(
      ()=>{
        fetch("weatherData.json").then((responce) => {
          return responce.json();
        }).then((data) => {
          this.setState({
            weather_data: data,
          });
        }).catch((error) => {
          console.log('request faild:', error);
        })

        fetch("alarmInfo.json").then((responce) => {
          return responce.json();
        }).then((data) => {
          this.setState({
            alarm_pic: data['data'],
          });
        }).catch((error) => {
          console.log('request faild:', error);
        })
      },3600000,
    );
  }

  render() {
    return (
        <Layout>
          <Header>
            <Row>
              <Col span={2}>
                <img src="icon.png" alt="图片加载失败" className="img-icon"/>
              </Col>
              <Col span={12}>
                <ul>
                  <li><h1 className="header_title">风雨相守&nbsp;&nbsp;冷暖相知</h1></li>
                  <li><p className="header_title_py">&nbsp;&nbsp;Wheather Information Service</p></li>
                </ul>
              </Col>
              <Col span={5}>
                <img src={this.state.alarm_pic} alt=" " className="yj-img"/>
              </Col>
              <Col span={5}>
                <div className="nl_time">{this.state.cDate}</div>

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
            <marquee className="yj-words" direction="left">{this.state.date} {this.state.hour_time}时发布东胜区未来24小时天气预报：天气 {this.state.weather_data['weather_s']}~{this.state.weather_data['weather_e']} 气温 {this.state.weather_data['temphigh']}～{this.state.weather_data['templow']} ℃ {this.state.weather_data['winddirect']} {this.state.weather_data['windpow']} {this.state.weather_data['quality']} {this.state.weather_data['detail']}【东胜区气象台】</marquee>
            </div>
            <div className="title_tip">
              <span className="title_tip_font">自动站实况</span>
            </div>
            <Router>
              <div>
                <Route exact path="/" component={WheatherStation01}/>
                <Route path="/type2" component={WheatherStation02}/>
              </div>
            </Router>
          </Content>
          <Footer className="footer">
            <span className="footer-word">Copyright © 2017 东胜区气象局 & 东胜区煤炭局</span>
          </Footer>
        </Layout>
    );
  }
}

export default Main;



