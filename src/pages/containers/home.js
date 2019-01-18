import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import data from "../../api.json";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from '../../widgets/containers/modal';
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../players/containers/video-player";

class Home extends Component{

    state = {
        modalVisible: false,
    }

    handleVisibleModal = (media) =>{
        this.setState({
            modalVisible: !this.state.modalVisible,
            media
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories
                     categories={data.categories} 
                     handleClick={this.handleVisibleModal} 
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleVisibleModal} >
                                <VideoPlayer 
                                    autoplay={true}
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;