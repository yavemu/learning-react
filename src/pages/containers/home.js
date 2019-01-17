import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import data from "../../api.json";
import Categories from "../../categories/components/categories";

class Home extends Component{
    render() {
        return (
            <HomeLayout>
                <Categories categories={data.categories}></Categories>
            </HomeLayout>
        )
    }
}

export default Home;