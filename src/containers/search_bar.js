import React , {Component} from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {fetchWeather} from "../actions/index"
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {term:""}
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }
    onInputChange = (event) => {
        console.log(event.target.value)
        this.setState({term:event.target.value})
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        //here to fetch data
        this.props.fetchWeather(this.state.term)
        this.setState({term:""})
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
              <span>
                <h2>VINNYTSYA REGIONAL CONSTRUCTION-REPAIR COMPANY FOR FIRE FIGHTING WORKS OF THE DISTRIBUTORY FIRE SAVINGS OF UKRAINE</h2>
              </span>
              <input 
                 placeholder="Get forecast in your favorite city"
                 className="form-control"
                 value ={this.state.term}
                 onChange={this.onInputChange}
                 />
              <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Show weather</button>
              </span>
            </form>
        )
    }
}
function  mapDispatchToProps  (dispatch)  {
    //action fetchWeather becomes available to the component
    return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null,mapDispatchToProps)(SearchBar)