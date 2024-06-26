import React, { useEffect, useState } from 'react';

import Image from "next/image";
import HomeServices from "@/Core/Services/Home";
import ImageOwlCarousel from '@/Template/Components/Carousel/ImageOwlCarousel';

const HomeCarousel = () => {
    const [carouselImage, setCarouselImage] = useState([]);

    useEffect(() => {
        const getAllImageSlide = async () => {
            const fetchingAllImage = await HomeServices.getAllSlideImage();
            const resultFetchingAllImageCaraousel = await fetchingAllImage.data.data;
            setCarouselImage(resultFetchingAllImageCaraousel);
        }

        getAllImageSlide();
    }, [])


    return (
        <div className="ml-2 mr-2 mt-5">
            <ImageOwlCarousel>
                {carouselImage && carouselImage.map((slide: any, index: number) => {
                    return (
                        <div key={index} className="lg:ml-2 lg:w-44">
                            <div className="item">
                                <Image className='rounded-lg'
                                    src={slide.img_url}
                                    width={500}
                                    height={106}
                                    alt={slide.name}
                                />
                            </div>
                        </div>
                    )
                })}
            </ImageOwlCarousel>
        </div>
    )
}

export default HomeCarousel;


