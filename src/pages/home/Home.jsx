import React, {useState, useEffect} from 'react';
import './home.css';
import header1 from '../../images/slider-img.png';
import header2 from '../../images/ecommerce.jpg';
import header3 from '../../images/ecommerce.png';
import header4 from '../../images/slider-img2.jpg';
import {HeaderCarousel, Collection, SliderData} from "../../components";
import axios from "axios";
import {v4 as uuid} from "uuid";

export default function Home() {
    const [categories, setCategories] = useState(null)
    const getAllCategories = async () => {
        const {data} = await axios.get('/api/categories')
        setCategories(data.categories)
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        getAllCategories()
    }, [])

    const headerCarouselImages = [
        {
            id: uuid(),
            img: header1
        },
        {
            id: uuid(),
            img: header2
        },
        {
            id: uuid(),
            img: header3
        },
        {
            id: uuid(),
            img: header4
        },
    ]

    return (
        <>
            <header>
                <HeaderCarousel images={headerCarouselImages}/>
                <Collection/>
                {
                    categories?.map(({_id, categoryName}) => (
                        <SliderData
                            key={_id}
                            title={categoryName}
                            category={categoryName}
                            all={'view all'}
                        />
                    ))
                }
            </header>
        </>
    )
}

