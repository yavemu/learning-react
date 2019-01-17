import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import data from "../../api.json";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from '../../widgets/containers/modal';

class Home extends Component{
    render() {
        return (
            <HomeLayout>
                <Related />
                <Categories categories={data.categories}></Categories>
                <ModalContainer>
                    <h1>Esto es un portal</h1>
                </ ModalContainer>
            </HomeLayout>
        )
    }
}

export default Home;