import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {

    /* state = {
        author: this.props.author,
    } */

    /* constructor(props){
        super(props);
        this.state = {
            author: props.author,
        }
    } */

    render() {
        return <div className="Media" onClick={this.props.handleClick}>
            <div className="Media-cover">
              <img className="Media-image" src={this.props.cover} alt="" height={160} width={260} />
              <h3 className="Media-title">{this.props.title}</h3>
              <p className="Media-author">{this.props.author}</p>
            </div>
          </div>;
    }
}

Media.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    author: PropTypes.string,
}

export default Media;