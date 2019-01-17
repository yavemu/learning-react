import React from "react";

function HomeLayout(props) {
    return (
        <section>
            Estoy en HomeLayout
            {props.children}
        </section>
    )
}

export default HomeLayout;