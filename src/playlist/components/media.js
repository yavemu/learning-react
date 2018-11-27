import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {

    state = {
        author: this.props.author,
    }

    /* constructor(props){
        super(props);
        this.state = {
            author: props.author,
        }
    } */

    handleOnClick = (event) => {
        console.log(this.props.image);
        this.setState({
            author: 'YAM',
        });
        
    }

    render() {
        return (
            <div className='Media' onClick={this.handleOnClick}>
                <div className='Media-cover' >
                    <img className='Media-image' src={this.props.image} alt="" height={160} width={260}/>
                    <h3 className='Media-title'>{this.props.title}</h3>
                    <p className='Media-author'>{this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    author: PropTypes.string,
}

export default Media;