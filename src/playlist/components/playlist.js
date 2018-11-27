import React, { Component } from "react";
import  Media from "./media";

class Playlist extends Component{
    render(){
        const playlist = this.props.data.categories[0].playlist;
        return (
            <div>
                {
                    playlist.map((item) => {
                        return <Media title={item.title} author={item.author} image={item.image} />
                    })
                }
            </div>
        )
    }
}

export default Playlist;