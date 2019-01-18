import React,{ Component } from "react";
import Search from "../components/search";

class SearchContainer extends Component {

    state = {
        value: ''
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
    }
    
    handleInputChange = (e) => {
        const value = e.target.value;

        this.setState({
            'value': value
        })

        console.log(value);
        
    }

    setRef = element => {
        this.input = element
    }

    render() {
        return <Search 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleInputChange}
            setRef={this.setRef}
            value={this.state.value}
        />;
    }
}

export default SearchContainer;