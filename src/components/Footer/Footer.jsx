import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from 'react-icons/fa';
import Button from '../Shared/Button';

const BannerImg = {
    backgroundImage: `url(https://img.lovepik.com/background/20211021/small/lovepik-blue-e-commerce-background-image_401460895.jpg)`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};
const FooterLink = [
    {
        title: "Careers",
        link: "/#"
    },
    {
        title: "FAQS",
        link: "/#"
    },
    {
        title: "RETURNS /EXCHANGES",
        link: "/#"
    },
    {
        title: "PRIVACY POLICY",
        link: "/#"
    },
]

const FooterLinks = [
    {
        title: "HOME",
        link: "/#"
    },
    {
        title: "ABOUT US",
        link: "/#about"
    },
    {
        title: "CONTACT US",
        link: "/#contact"
    },
    {
        title: "BLOG",
        link: "/#blog"
    },
]

const Footer = () => {
    return (
        <div
            style={BannerImg}
            className='text-white mt-20'>
            <div className='container'>
                <div
                    data-aos='zoom-in'
                    className='grid md:grid-cols-3 pt-5'>
                    {/* Comapany Deatails */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                            <a href=""
                                className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl no-underline'
                            >Eshop</a>
                        </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti odit recusandae fuga molestias modi quod.</p>

                        <p className='py-5 font-bold'>Made with <span></span>by The Coding Journey</p>
                        <div className='py-5'>
                        <Button
                        text="Visit our Youtube Channel"
                        bgColor="bg-primary"
                        textColor="text-white"
                        />
                        </div>
                    </div>
                    {/* Footer Links */}

                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 font-bold'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((link) => (
                                            <li className='cursor-pointer hover:text-orange-400 hover:translate-x-1 duration-300 text-gray-200'
                                                key={link.title}
                                            >
                                                <span>{link.title}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div className='py-8 px-4 font-bold'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLink.map((link) => (
                                        <li className='cursor-pointer hover:text-orange-400 hover:translate-x-1 duration-300 text-gray-200'
                                            key={link.title}
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        {/* Social Links */}
                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="https://www.instagram.com/mrashokkumawat6641/">
                                    <FaInstagram className='text-3xl' />
                                </a>
                                <a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fsearch_results%2F%3Fq%3DVineet%2Bmishra">
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                                    <FaLinkedin className='text-3xl' />
                                </a>
                            </div>
                            <div className='mt-6 font-bold'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className='flex items-center gap-3 mt-3'>
                                    <FaMobileAlt />
                                    <p>+91 7878602608</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer



