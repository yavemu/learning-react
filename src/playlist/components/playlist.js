import React from "react";
import Media from "./media";
import Play from "../../icons/components/play";
import Pause from "../../icons/components/pause";
import Volume from "../../icons/components/volume";
import Fullscreen from "../../icons/components/fullscreen";

function Playlist(props) {
   
    const playlist = props.data.categories[0].playlist;
    return (
        <div>
            <Play size={50} color="red"/>
            <Pause size={50} color="red"/>
            <Volume size={50} color="red"/>
            <Fullscreen size={50} color="red"/>
            <br />
            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }
        </div>
    )
}

export default Playlist;