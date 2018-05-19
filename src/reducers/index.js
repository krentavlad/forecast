import {combineReducers} from "redux"
//faire bien attention, curly brace lorsque la
//composante est vraiment nommee comme telle
import WeatherReducer from "../reducers/reducer_weather"

 const rootReducer = combineReducers({
     weather: WeatherReducer
 })
    
export default rootReducer