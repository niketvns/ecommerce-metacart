import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import './headerCarousel.css'
import {useNavigate} from "react-router-dom";


const HeaderCarousel = ({ images }) => {

    const navigate = useNavigate()

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper header-carousel"
            >
                {
                    images.map(({id, img}) => {
                        return (
                            <SwiperSlide key={id}>
                                <div className="slider">
                                    <img src={img} alt='carousel-image'/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <button className={'shop-now'} onClick={()=>navigate('/shop')}>Shop Now</button>
            </Swiper>
        </>
    )
}

export default HeaderCarousel;