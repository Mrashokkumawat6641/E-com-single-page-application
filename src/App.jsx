import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'

import headphone from '/assets/Banner/headphoness.png'
import smartwatch from '/assets/Banner/SmartWatch.png'
import Products from './components/Products/Products'
import Blog from './components/Blog/Blog'
import Partners from './components/partners/Partners'
import Footer from './components/Footer/Footer'


const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  title3: "HAPPY HOURS",
  data: "10 Jan to 28 Jan",
  image: headphone,
  image2:smartwatch,
  title2: "Air Solo Bass",
  title5: "SMART SOLO",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore odit similique, ducimus cumque veritatis?",
  bgColor: "#f42c37",
  bgColor2: "#2C2C2C",
}

const App = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
<Navbar />
<Hero />
<Category />
<Services />
<Banner data={BannerData} />
<Products />
<Banner2 data={BannerData} />
<Blog />
<Partners />
<Footer />

    </div>
  )
}

export default App
