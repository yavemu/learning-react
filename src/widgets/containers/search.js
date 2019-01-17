import React,{ Component } from "react";
import Search from "../components/search";

class SearchContainer extends Component {

    state = {
        value: 'Valor por defecto'
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.input.value,'Submit');
    }
    
    handleInputChange = (e) => {
        const value = e.target.value;

        this.setState({
            'value': value.replace(" ","-")
        })

        console.log('Change');
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