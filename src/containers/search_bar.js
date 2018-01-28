import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            term:''
        }

        //Kinda over riding this method
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };


    onInputChange(event){
        this.setState(
           {
               term:event.target.value
           }
        );
        
    }

    onFormSubmit(event){
        event.preventDefault();

        // we need to go and fetch weather data
        // API 4ea9631133bfaf85ec749fbd2faf5b10
        this.props.fetchWeather(this.state.term);
        this.setState({ term : ''})

    }

    render(){
        return(
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange = {this.onInputChange}
                />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
            </form>
        );


    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}



export default connect(null , mapDispatchToProps)(SearchBar);