import React from 'react'
import Slider from "react-slick"
import Image1 from "/assets/Hero/Image2222.png"
import Image2 from "/assets/Hero/laptop.png"
import Image3 from "/assets/Hero/smartwatch.png"
import Button from '../Shared/Button'

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "M1 Chip",
        title: "MacBook",
        title2: "Laptop",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Men Noise ColorFit Pulse 2 Max",
        title: "Bluetooth Smartwatch",
        title2: "SmartWatch",
    },
]


const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        caseEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    {/* Hero SEction */}
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className=' flex flex-col justify-center gap-4 sm:pl-0 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1
                                        className='text-2xl sm:text-3xl lg:text-2xl font-bold  sm:px-5'
                                        >{data.subtitle}</h1>
                                        <h1
                                        className='text-5xl sm:text-6xl lg:text-2xl font-bold sm:-ml-12'
                                        >{data.title}</h1>
                                        <h1
                                        className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[50px] xl:text-[80px] font-bold sm:-ml-12'
                                        >{data.title2}</h1>
                                        <div>
                                           <Button text="Shop By Category"
                                           bgColor="bg-primary"
                                           textColor="text-white"
                                           />
                                        </div>
                                    </div>
                                    {/* img section */}
                                    <div>
                                        <div className='order-1 sm:order-2'>
                                            <img src={data.img} alt=""
                                                className='w-[700px] h-[500px] sm:h-[550px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40  '
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                        }
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Hero