import React from 'react'
import Heading from '../Shared/Heading'

// Images Imports

import Img5 from '/assets/Products/img1.png'
import Img6 from '/assets/Products/img2.png'
import Img7 from '/assets/Products/img3.png'
import Img8 from '/assets/Products/img1.png'
import Img1 from '/assets/Products/head1.png'
import Img2 from '/assets/Products/head2.png'
import Img3 from '/assets/Products/head3.png'
import Img4 from '/assets/Products/head4.png'
import ProductCard from './ProductCard'
 
const ProductsData = [
    {
        id:1,
        img:Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id:2,
        img:Img2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200"
    },
    {
        id:3,
        img:Img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400"
    },
    {
        id:4,
        img:Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
    {
        id:5,
        img:Img5,
        title:"Boat Headphone",
        price: "120",
        aosDelay: "600"
    },
    {
        id:6,
        img: Img6,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: 600,
    },
    {
        id:7,
        img:Img7,
        title:"Goggles",
        price: "320",
        aosDelay: "600"
    },
    {
        id:8,
        img: Img8,
        title: "Printed",
        price: "220",
        aosDelay: 600,
    },


]

const Products = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <Heading title="Our Products"
            subtitle={"Explore Our Products"}
            />

            {/* Body section */}
            <ProductCard data={ProductsData} />
        </div>
    </div>
  )
}

export default Products