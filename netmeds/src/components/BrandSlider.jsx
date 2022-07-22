import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import Styles from "./BrandSlider.module.css"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: "5px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: "5px" }}
            onClick={onClick}
        />
    );
}

export default class CustomArrows extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,

            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div style={{ width: "95%", marginLeft: "35px" }}>
                <div><h2 style={{ display: "flex", justifyContent: "flex-start" }}>Featured Brands</h2></div>

                <Slider {...settings}>
                    <div className={Styles.volini}>
                        <img className='imgs' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658299761_Huggies_mini-banners-web.jpg" alt='pic1' />

                    </div>
                    <div>
                        <img className='imgs' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1657735185_Web.png" alt="pic2" />

                    </div>
                    <div>
                        <img className='imgs' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658243977_Koparp_Web.jpg" alt="pic3" />

                    </div>
                    <div>
                        <img className='imgs' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658244390_Inlife_mini-banners-web.jpg" alt="pic4" />

                    </div>
                    <div>
                        <img className='imgs' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658244942_Sahyog_mini-banners-web.jpg" alt="pic5" />

                    </div>
                    <div>
                        <img className='imgs' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658243517_omron_mini-banners-web.jpg" alt="pic6" />

                    </div>
                    <div>
                        <img className='imgs' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658244390_Inlife_mini-banners-web.jpg" alt="pic7" />
                    </div>
                    <div>
                        <img className='imgs' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1658340679_Saridon_advance_Mini_Banners-_Web-436x224px_copy.jpg" alt="pic8" />
                    </div>
                </Slider>
            </div>
        );
    }
}