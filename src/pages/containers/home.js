import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import data from "../../api.json";
import Categories from "../../categories/components/categories";
import Related from "../components/related";

class Home extends Component{
    render() {
        return (
            <HomeLayout>
                <Related />
                <Categories categories={data.categories}></Categories>
            </HomeLayout>
        )
    }
}

export default Home;