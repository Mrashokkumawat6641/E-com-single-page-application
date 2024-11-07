import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '/assets/News/Smartwatch.jpg'

//import Images

import Img2 from '/assets/News/image.webp'
import Img3 from '/assets/News/vison.jpg'

const BlogData = [
    {
        title: "How to choose perfect smartwatch",
        subtitle: "Alias quod labore pariatur corrupti aliquid molestiae incidunt, doloribus porro hic nisi quaerat sint distinctio neque numquam, saepe obcaecati officiis inventore! Cupiditate!",
        published: "Jan 20, 2024 by Dilshad",
        image: Img1,
    },
    {
        title: "How to choose perfect gadget",
        subtitle: "Alias quod labore pariatur corrupti aliquid molestiae incidunt, doloribus porro hic nisi quaerat sint distinctio neque numquam, saepe obcaecati officiis inventore! Cupiditate!",
        published: "Jan 20, 2024 by Satya",
        image: Img2,
    },
    {
        title: "How to choose perfect VR headset",
        subtitle: "Alias quod labore pariatur corrupti aliquid molestiae incidunt, doloribus porro hic nisi quaerat sint distinctio neque numquam, saepe obcaecati officiis inventore! Cupiditate!",
        published: "Jan 20, 2024 by Dilshad",
        image: Img3,
    },
]
const Blog = () => {
    return (
        <div className='my-12'>
            <div className="container">
                {/* Header section */}
                <Heading title="Recent News" subtitle={"Explore Our Products"}
                />

                {/* Blog section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-4 md:gap-7 '>

                {/* Blog Card */}
                {
                    BlogData.map((data) => (
                        <div key={data.title} className='bg-white dark:bg-gray-900'>
                            {/* image section */}
                            <div>
                                <img src={data.image} alt="" 
                                className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                                />
                            </div>
                            {/* //container section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }

                </div>
            </div>
        </div>
    )
}

export default Blog