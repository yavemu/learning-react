import React from 'react';
import Playlist from '../../playlist/components/playlist' ;
import "./category.css";

function Category(props) {
    return <div className="Category">
        <h2 className="Category-title">{props.title}</h2>
        <p className="Category-description">{props.description}</p>
        <Playlist 
            playlist={props.playlist} 
            handleClick={props.handleClick}
        />
      </div>;
    
}

export default Category;