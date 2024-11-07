import React from 'react'
import Image1 from '/assets/Category/headphones.png'
import Image2 from '/assets/Category/smartwatchpng.png'
import Image4 from '/assets/Category/games.png'
import Image3 from '/assets/Category/macbook.png'
import Image5 from '/assets/Category/Speaker.png'
import Image6 from '/assets/Category/Samsung-Galaxy-S24-Ultra.png'



import Button from '../Shared/Button'

const Category = () => {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* first col */}

                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Headphone</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <img src={Image1} alt=""
                            className='w-[320px] absolute bottom-0'
                        />
                    </div>

                    {/* second col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>SmartWatch</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-brandYellow"}
                                />
                            </div>
                        </div>
                        <img src={Image2} alt=""
                            className='w-[220px] absolute -right-4 lg:top-[40px]'
                        />
                    </div>
                    {/* third col */}

                    <div className='col-span-2  py-10 pl-5 bg-gradient-to-br from-black/90 to-primary text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='space-y-2 mb-4 text-2xl'>
                                <p className='text-gray-400'>Enjoy</p>
                                <p className='text-4xl font-semibold'>with</p>
                                <p className='text-8xl xl:text-8xl font-bold opacity-40'>Laptop</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-primary"}
                                />
                            </div>
                        </div>
                        <img src={Image3} alt=""
                            className='w-[220px] absolute top-1/2 -translate-y-1/2 -right-0'
                        />
                    </div>
                    {/* forth Col */}

                    <div className='col-span-2  py-10 pl-5 bg-gradient-to-br from-black/90 to-primary/0 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='space-y-2 mb-4'>
                                <p className='text-gray-400 text-2xl'>Enjoy</p>
                                <p className='text-4xl font-semibold'>with</p>
                                <p className='text-8xl xl:text-8xl font-bold opacity-40'>Games</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-primary"}
                                />
                            </div>
                        </div>
                        <img src={Image4} alt=""
                            className='w-[320px] mt-9 absolute top-1/2 -translate-y-1/2 -right-0'
                        />
                    </div>

                    {/* five col */}

                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-orange-300 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-6xl sm:text-6xl xl:text-7xl font-bold opacity-20 mb-2'>Speakers</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-orange-400"}
                                />
                            </div>
                        </div>
                        <img src={Image5} alt=""
                            className='w-[420px] absolute bottom-0'
                        />
                    </div>

                    {/* six col */}

                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-brandBlue text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-6xl font-bold opacity-20 mb-2'>Samsang Phones</p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-brandBlue"}
                                />
                            </div>
                        </div>
                        <img src={Image6} alt=""
                            className='w-[520px] absolute bottom-0 '
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Category