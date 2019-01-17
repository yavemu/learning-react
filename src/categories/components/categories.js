import React from "react";
import Category from "./category";
import './categories.css';

function Categories(props) {
    return (
        <div className="Categories">
            {props.categories.map(item => {
                return (
                    <Category 
                        {...item} 
                        key={item.id} 
                        handleClick = {props.handleClick}
                    />
                )
            })}
        </div>
    )
}

export default Categories