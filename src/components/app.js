//c'est ici que toutes les composantes seront présentées
import React , {Component} from "react"
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'
export default class App extends Component {
    
    render() {
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        )
    }
}
//ReactDOM.render(<App/>,document.getElementById("id"))