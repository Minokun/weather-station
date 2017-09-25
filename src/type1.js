import React, { Component } from 'react';
import './App.css';
import { Row , Col, Icon} from 'antd';
import {today,} from './Lunar.js';

let LDate = today;

class WheatherStation01 extends Component{
  
  state = {
    api_data:JSON.parse('[{"TEM_Max": "15.9", "TEM_Min": "15.4", "PRE_1h": "0.8", "WIN_D_Avg_10mi": "39", "WIN_S_Avg_10mi": "1.8", "TEM": "15.9", "direction": "\u4e1c\u5317\u98ce"}, {"TEM_Max": "16.6", "TEM_Min": "16.5", "PRE_1h": "0.3", "WIN_D_Avg_10mi": "142", "WIN_S_Avg_10mi": "3.7", "TEM": "16.5", "direction": "\u4e1c\u5357\u98ce"}, {"TEM_Max": "17.1", "TEM_Min": "16.2", "PRE_1h": "1.7", "WIN_D_Avg_10mi": "120", "WIN_S_Avg_10mi": "4.4", "TEM": "16.2", "direction": "\u4e1c\u5357\u98ce"}, {"WIN_D_Avg_10mi": 31.9, "WIN_S_Avg_10mi": 3.3, "TEM": "", "TEM_Max": "", "TEM_Min": "", "PRE_1h": 0, "direction": "\u4e1c\u5317\u98ce"}, {"WIN_D_Avg_10mi": 40.0, "WIN_S_Avg_10mi": 1.7, "TEM": 16.0, "TEM_Max": 16.0, "TEM_Min": 15.5, "PRE_1h": 0, "direction": "\u4e1c\u5317\u98ce"}, {"WIN_D_Avg_10mi": 31.7, "WIN_S_Avg_10mi": 0.0, "TEM": 15.1, "TEM_Max": 15.9, "TEM_Min": 15.1, "PRE_1h": 0, "direction": "\u4e1c\u5317\u98ce"}]'),
    info:[
      {"name":"东胜城区","pic":"st_ds.jpeg"},
      {"name":"泊江海","pic":"st_bjh.jpeg"},
      {"name":"色连二矿","pic":"st_slek.jpeg"},
      {"name":"永顺煤矿","pic":"st_ysmk.jpeg"},
      {"name":"塔拉壕煤矿","pic":"st_tlh.jpeg"},
      {"name":"明达煤矿","pic":"st_mdmk.jpeg"}
    ],
    current_time: new Date().getHours() + ":" + new Date().getMinutes(),
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

    this.timer2 = setInterval(
      ()=>{
        var time_list = this.getCurrentTime();

        this.setState({
          current_time: time_list['multiple']
        });
      }
    , 60000);
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
                    <h1 className="station-time">{this.state.current_time} 实况</h1>
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

export default WheatherStation01;