import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"
import images from "./images";
import VideoPlayer from "../advertisements-details/video";
import { useRef } from "react";
import PrevArrowIcon from "./PrevArrowIcon";
import NextArrowIcon from "./NextArrowIcon";



interface ArrowProps {
    props: {
        className: string
        style: any
        onClick: () => void
    }
}

const NextArrow = ({ className, style, onClick }: any) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
            <NextArrowIcon />
        </div>
    );
}

const PrevArrow = ({ className, style, onClick }: any) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        >
            <PrevArrowIcon />
        </div>
    );
}


const VideoSlider = () => {


    const settings = {
        // infinite: true,
        centerMode: true,
        className: "center",
        centerPadding: "60px",
        slidesToShow: 4,
        slidesToScroll: 1,
        // dots: true,
        // lazyLoad: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="flex items-center">

            </div>
            <div className="">
                <h1>Image Gallery</h1>
                <div className="h-30 w-30">
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src[0]} alt={item.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="imgslider mx-5">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default VideoSlider
