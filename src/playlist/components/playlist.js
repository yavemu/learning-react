import React from "react";
import  Media from "./media";

function Playlist(props) {
    const playlist = props.data.categories[0].playlist;
    return (
        <div>
            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }
        </div>
    )
}

export default Playlist;