"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// PRODUCT DATA

interface DataType {
    description: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        description: 'Identity Access Management',
        name: 'nIAM',
        imgSrc: '/niam.svg',
    },
    {
        description: 'Audit Management Software',
        name: 'nAMS',
        imgSrc: '/nams.png',
    },
    {
        description: 'ERP Software',
        name: 'nBsuits',
        imgSrc: '/nbsuits.png',
    },
    {
        description: 'Information Security Maturity',
        name: 'nISMA',
        imgSrc: '/nisma.png',
    },
    {
        description: 'Board Meeting Management',
        name: 'nBoard',
        imgSrc: '/nboard.png',
    },
    {
        description: 'Risk Management Software',
        name: 'nERIM',
        imgSrc: '/nerim.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 0,
            cssEase: "linear",
            pauseOnHover: false,
            pauseOnFocus: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 0,
                        pauseOnHover: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 0,
                        pauseOnHover: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 0,
                        pauseOnHover: false
                    }
                }
            ]
        };


        return (
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Our Products.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Our Products.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Our Products.</h3>
                    </div>

                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                <div className='relative flex items-center justify-center w-48 h-48 mx-auto mb-4 bg-gray-50 rounded-2xl'>
                                    <Image
                                        src={items.imgSrc}
                                        alt={items.name}
                                        width={120}
                                        height={120}
                                        className="object-contain max-w-full max-h-full"
                                        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                                    />
                                </div>
                                <h4 className='text-4xl font-bold pt-14 text-neoncyan'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.description}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>

        );
    }
}
