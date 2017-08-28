import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout  , Row , Col ,Icon} from 'antd';
import LunarUtil from './LunarUtil.js';

const { Header, Footer, Content} = Layout;
let cDate = LunarUtil.today();

class WheatherMap extends Component{

  render(){
    return (
      <iframe title="map_div" src={this.props.map_url} className="map"></iframe>
    );
  }
}

class WheatherStation extends Component{
  
  state = {
    api_data:JSON.parse('[{"TEM_Max": "15.9", "TEM_Min": "15.7", "PRE_1h": "0.8", "WIN_D_Avg_10mi": "39", "WIN_S_Avg_10mi": "1.8", "TEM": "15.9", "direction": "\u4e1c\u5317\u98ce"}, {"TEM_Max": "16.6", "TEM_Min": "16.5", "PRE_1h": "0.3", "WIN_D_Avg_10mi": "142", "WIN_S_Avg_10mi": "3.7", "TEM": "16.5", "direction": "\u4e1c\u5357\u98ce"}, {"TEM_Max": "17.1", "TEM_Min": "16.2", "PRE_1h": "1.7", "WIN_D_Avg_10mi": "120", "WIN_S_Avg_10mi": "4.4", "TEM": "16.2", "direction": "\u4e1c\u5357\u98ce"}, {"WIN_D_Avg_10mi": 31.9, "WIN_S_Avg_10mi": 3.3, "TEM": "", "TEM_Max": "", "TEM_Min": "", "PRE_1h": 0, "direction": "\u4e1c\u5317\u98ce"}, {"WIN_D_Avg_10mi": 40.0, "WIN_S_Avg_10mi": 1.7, "TEM": 16.0, "TEM_Max": 16.0, "TEM_Min": 15.5, "PRE_1h": 0, "direction": "\u4e1c\u5317\u98ce"}, {"WIN_D_Avg_10mi": 31.7, "WIN_S_Avg_10mi": 0.0, "TEM": 15.1, "TEM_Max": 15.9, "TEM_Min": 15.1, "PRE_1h": 0, "direction": "\u4e1c\u5317\u98ce"}]'),
    info:[
      {"name":"东胜城区","pic":"st_ds.jpeg"},
      {"name":"泊江海","pic":"st_bjh.jpeg"},
      {"name":"色连二矿","pic":"st_slek.jpeg"},
      {"name":"永顺煤矿","pic":"st_ysmk.jpeg"},
      {"name":"塔拉壕煤矿","pic":"st_tlh.jpeg"},
      {"name":"明达煤矿","pic":"st_mdmk.jpeg"}
    ],
  }

  componentDidMount() {
    fetch("apiData.json").then((responce) => {
      return responce.json();
    }).then((data) => {
      this.setState({
        api_data: data,
      });
    }).catch((error) => {
      console.log('request faild:', error);
    }) 

    this.timer1 = setInterval(
      ()=>{
        fetch("apiData.json").then((responce) => {
          return responce.json();
        }).then((data) => {
          this.setState({
            api_data: data,
          });
        }).catch((error) => {
          console.log('request faild:', error);
        }) 
      }
      , 300000);
  }

  render(){
    var rows=[];
    var styObj_arr=[];

    this.state.api_data.map((item) => {
      styObj_arr.push({
        height: "40px",
        marginLeft: "-2px",
        transform:"rotate(" + (item['WIN_D_Avg_10mi']) + "deg)",
      });
      return styObj_arr;
    });

    for (var n in this.state.api_data){
      rows.push(<div className="station-info" key={n}>
          <Row>
            <Col span={10}>
              <img src={this.state.info[n]['pic']} alt="图片加载失败" className="station-info-img"/>
            </Col>
            <Col span={14}>
              <div className="station-title">
                <Row>
                  <Col span={14}>
                    <h1 className="station-name">{this.state.info[n]['name']}</h1>
                  </Col>
                  <Col span={10}>
                    <h1 className="station-time">{this.props.current_time} 实况</h1>
                  </Col>
                </Row>
              </div>
              <div className="station-tem">
                <Row>
                  <Col span={4}>
                    <img src="tem_h.png" alt="图片加载失败" className="tem_h"/>
                  </Col>
                  <Col span={8}>
                    <h1 className="tem-word">{this.state.api_data[n]['TEM']} ℃</h1>
                  </Col>
                  <Col span={12}>
                    <ul className="tem-low-high">
                      <li><Icon type="arrow-up" /> {this.state.api_data[n]['TEM_Max']} ℃</li>
                      <li><Icon type="arrow-down" /> {this.state.api_data[n]['TEM_Min']} ℃</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="station-rain-wind">
                <Row>
                    <Col span={4}>
                      <img src="rain.png" alt="图片加载失败" className="station-rain"/>
                    </Col>
                    <Col span={9}>
                      <h1 className="rain-word">&nbsp;&nbsp;{this.state.api_data[n]['PRE_1h']} mm</h1>
                    </Col>
                    <Col span={4}>
                      <img style={styObj_arr[n]} src="wind.png" alt="图片加载失败" className="station-wind"/>
                    </Col>
                    <Col span={7}>
                      <ul className="station-wind-word">
                        <li>{this.state.api_data[n]['direction']}</li>
                        <li>{this.state.api_data[n]['WIN_S_Avg_10mi']} m/s</li>
                      </ul>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </div>);
    }
    return(
      <div>
        {rows}
      </div>
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
    weather_data: ''
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
                <img src={this.state.alarm_pic} alt="图片加载失败" className="yj-img"/>
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
            <marquee className="yj-words" direction="left" scrollamount="5" scrolldelay="100">{this.state.date} {this.state.hour_time}时发布东胜区未来24小时天气预报：天气 {this.state.weather_data['weather_s']}~{this.state.weather_data['weather_e']} 气温 {this.state.weather_data['temphigh']}～{this.state.weather_data['templow']} ℃ {this.state.weather_data['winddirect']} {this.state.weather_data['windpow']} {this.state.weather_data['quality']} {this.state.weather_data['detail']}【东胜区气象台】</marquee>
            </div>
            <div className="title_tip">
              <span class="title_tip_font">自动站实况</span>
            </div>
            <WheatherStation current_time={this.state.current_time} />
          </Content>
          <Footer className="footer">
            <span className="footer-word">Copyright © 2017 东胜区气象局 & 东胜区煤炭局</span>
          </Footer>
        </Layout>
    );
  }
}

export default Main;



