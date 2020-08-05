import "./index.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import React from "react";
import styled from "styled-components";


export const PostImage = styled.img`
  cursor: pointer;
`

const Carousel = ({image}) => {


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
        <div className="App">
            <Slider {...settings}>
                {image?
            <PostImage src={image}/> : null}
            </Slider>
        </div>
    )
}

export default Carousel
