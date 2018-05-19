import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"

import Plot from 'react-plotly.js';
import Chart from '../components/chart'

class WeatherList extends Component {
    renderWeather(cityData) {
        const name =cityData.city.name
        const temperature = cityData.list.map(x=>x.main.temp)
        const humid = cityData.list.map(x=>x.main.humidity)
        const pressure = cityData.list.map(x=>x.main.pressure)
        
        return (
        <tr key={name}>
            <td>{name}</td>
            <td>
                <Chart color="red" data={temperature}/>   
            </td>
      <td>
                <Chart color="orange" data={humid}/>   
      </td>
      <td>
                <Chart color="blue" data={pressure}/>   
      </td>
        </tr>)  
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                      <tr>
                          <th>City</th>
                          <th>Temperature</th>
                          <th>Pressure</th>
                          <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
               </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return { weather } //{weather} ~ {weather:weather}
}

export default connect(mapStateToProps)(WeatherList)
