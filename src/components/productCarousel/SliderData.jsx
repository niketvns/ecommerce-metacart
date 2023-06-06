import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import SliderCard from './SliderCard';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import 'react-alice-carousel/lib/alice-carousel.css';


const SliderData = ({title, category, all}) => {

    const [noOfItems, setNoOfItems] = useState(5)
    const [dealOfTheDay, setDealOfTheDay] = useState();

    const API_URL = `/api/category/${category}`;

    const fetchProductsByCategory = async () => {
        try {
            let {data} = await axios.get(API_URL)
            setDealOfTheDay(data.products);
        } catch (error) {
            console.log("This is error message: " + error.message)
        }
    }


    useEffect(() => {
        fetchProductsByCategory()
        let deviceWidth = window.innerWidth;
        if (deviceWidth < 1300 && deviceWidth > 1000) {
            setNoOfItems(4);
        } else if (deviceWidth < 1000 && deviceWidth > 860) {
            setNoOfItems(4)
        } else if (deviceWidth < 860 && deviceWidth > 600) {
            setNoOfItems(3)
        } else if (deviceWidth < 600) {
            setNoOfItems(2)
        }
    }, [])

    return (
        <>
            <div className="best-deal">
                <div className="title-deal">
                    <h2>{title}</h2>
                    {/*<NavLink to='/shop'>{all}</NavLink>*/}
                </div>
                {
                    dealOfTheDay ?
                        <div className="deal-items">
                            <Swiper
                                slidesPerView={noOfItems}
                                spaceBetween={20}
                                slidesPerGroup={1}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    dealOfTheDay?.map((product) => {
                                        return (
                                            <SwiperSlide key={product._id}>
                                                <SliderCard
                                                    product={product}
                                                />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div> :
                        <div className="best-deal-loader">
                            <Box>
                                <Skeleton/>
                                <Skeleton animation="wave"/>
                                <Skeleton animation={false}/>
                            </Box>
                        </div>
                }
            </div>

        </>
    )
}

export default SliderData;