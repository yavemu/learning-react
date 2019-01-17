import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import data from "../../api.json";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from '../../widgets/containers/modal';
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import SearchContainer from "../../widgets/containers/search";

class Home extends Component{

    state = {
        modalVisible: false,
    }

    handleVisibleModal = (e) =>{
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <SearchContainer></SearchContainer>
                    <Categories categories={data.categories} handleClick={this.handleVisibleModal} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleVisibleModal} >
                                <h1>Esto es un portal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;