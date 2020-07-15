import React, {useState} from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GreedImage from "./GridImage";
import Auxiliary from "util/Auxiliary";

const MediaList = (props) => {

  const [previewVisible, setPreviewVisible] = useState();

  const handleToggle = () => {
    setPreviewVisible(!previewVisible);
  };
    return (
      <Auxiliary>
        <GreedImage mediaList={props.mediaList} handleToggle={handleToggle}/>
        <Modal isOpen={previewVisible} toggle={handleToggle}>
          <ModalHeader toggle={handleToggle}>Slide Show</ModalHeader>
          <ModalBody>
            <Carousel mediaList={props.mediaList}/>
          </ModalBody>
        </Modal>
      </Auxiliary>
    );
  };

function Carousel(props) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides'
  };
  return (
    <>
      <Slider {...settings}>
        {props.mediaList.map((media, index) =>
          <div key={index}>
            <img alt="example" style={{width: '100%'}} src={media.image}/>
          </div>
        )
        }
      </Slider>
    </>
  );
}

export default MediaList;
