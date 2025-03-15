"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import PowerMiles_Card from "./images/xb2.png";
import selfi from "./images/xb1.png";
import tiga from "./images/xb3.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TextRevealT } from "./TextReveal";

function ExploreCarousel() {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 3, // Show 3 slides on laptop
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1025, // iPad Mini & iPad Air (<=1024px)
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768, // Mobile (<=768px)
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };





    return (
        <div  >
            {/* explore crdit card */}

            <div className="flex justify-center my-14" id="cards">
                <div className="container">
                    <p className="why-choose mt-5 lg:mt-10 mb-10"><span>Explore Our Credit Card Range</span></p>
                    <div className=" card_bg">
                        <Slider {...settings}>
                            <div className="px-5" >
                                <div className="xplore-box c1" data-aos="fade-up">
                                    <div>
                                        <img className="img-fluid" data-aos="fade-up" src="https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/xb2.png" alt="" />
                                        <div className="" >
                                            <div className="xplore-txt ct1r">
                                                <p>PowerMiles Credit Card </p>
                                                <p>  Experience the Power of Choice!</p>
                                            </div>
                                            <div className="xplore-txt-card ct2r">
                                                <p >Features</p>
                                                <ul className="  list-disc">
                                                    <li>Premium Metal Credit Card.</li>
                                                    <li>Enjoy exclusive Club Marriott and EazyDiner memberships.</li>
                                                    <li>Earn 3X Reward Points on International Transactions.</li>
                                                    <li>Get 3 RP on every Rs.100 spent (1 RP = Up to Re.1).</li>
                                                    <li>Redeem your Reward Points at the ratio of 1:1 (1 RP = Re.1) for Miles transfer and on exclusive catalogue.</li>
                                                    <li>Complimentary lounge visits - 2 Domestic and 1 International per calendar quarter .</li>
                                                    <li>Low forex markup of 2%.</li>
                                                    <li>Joining & Annual Fees - Rs.5,000 + GST.</li>
                                                </ul>

                                                {/* <div className="eligibility" >
                                                <p className="text-white pb-3">Eligibility criteria</p>
                                                <ul className="  list-disc">
                                                    <li><b>Fee </b>– Rs. 5,000</li>
                                                    <li> <b>Eligibility</b> – Income of 18 L+</li>

                                                </ul>
                                            </div> */}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="xplore-btn  ctb3 "  >
                                        <a href="#apply-now"><button className="">Apply Now</button></a>
                                        {/* <button className=""></button> */}
                                    </div>

                                </div>
                            </div>
                            <div className="px-5" >
                                <div className="xplore-box c2" data-aos="fade-up">
                                    <div>
                                        <img className="img-fluid" data-aos="fade-up" src="https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/selfi.png" alt="" />
                                        <div className="xplore-txt ct2r" >
                                            <p>Selfe Credit Card </p>
                                            <p> Experience the Power of Choice!</p>

                                            <div className="xplore-txt-card ct2r">
                                                <p >Features</p>
                                                <ul className="  list-disc">
                                                    <li> <b>Choice of Membership</b> – Choose 2 complimentary annual memberships from top brands.</li>
                                                    <li><b>Choice of Accelerated reward categories</b> – Earn 5X Rewards on select categories. </li>
                                                    <li><b>Choice of Card Style </b>– Choose between Metal Variant, Eco-friendly Green & Regular Blue. </li>
                                                    <li><b> Choice of Billing Cycle</b> – Choose billing date that works best for you - 12th, 16th or 20th.</li>
                                                    <li><b>Choice of Payment Network</b> – Choose between Visa or RuPay for seamless transactions. </li>
                                                    <li>Earn 2 RP on every Rs.100 spent (1 RP = 35 Paise).</li>
                                                    <li>Joining & Annual Fees - Rs.1,000 + GST (Additional fee applicable for Green & Metal card style).</li>


                                                </ul>

                                                {/* <div className="eligibility">
                                                <p className="text-white pb-3">Eligibility criteria</p>
                                                <ul className="  list-disc">
                                                    <li><b>Fee</b> – Rs.1000 for regular | Additional charges applicable for Green & Metal</li>
                                                    <li><b>Eligibility </b>– Income of 5 L to 18 L</li>

                                                </ul>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="xplore-btn ctb3"  >
                                        <a href="#apply-now"><button className="">Apply Now</button></a>
                                        {/* <button className="">Know More</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="px-5">
                                <div className="xplore-box c3" data-aos="fade-up">
                                    <div>
                                        <img className="img-fluid" data-aos="fade-up" src="https://equitasbank.s3.ap-south-1.amazonaws.com/camp-credit-card/tiga.png" alt="" />
                                        <div className="xplore-txt ct3r">
                                            <p>TIGA Credit Card </p>
                                            <p>Experience the Power of 3!</p>
                                        </div>
                                        <div className="xplore-txt-card ct2r">
                                            <p >Features</p>
                                            <ul className="  list-disc">
                                                <li><b>Pay by 3</b> – Automatically convert transactions on select brands to 3 month low cost EMI.</li>
                                                <li><b>3X Rewards</b> – Points on UPI, contactless and Pay by 3 merchants.</li>
                                                <li>Introductory Low interest rate of 0.99% p.m. for first 3 months.</li>
                                                <li>Earn 1 RP on every Rs.100 spent (1 RP = 15 Paise).</li>
                                                <li>Joining & Annual Fees - Rs.500 + GST.</li>

                                            </ul>

                                            {/* <div className="eligibility">
                                            <p className="text-white pb-3">Eligibility criteria</p>
                                            <ul className="  list-disc">
                                                <li><b>Fee </b>–Rs.500</li>
                                                <li> <b>Eligibility</b> – Income of 2.5L to 5L</li>

                                            </ul>
                                        </div> */}
                                        </div>
                                    </div>


                                    <div className="xplore-btn ctb3 "  >
                                        <a href="#apply-now"><button className="">Apply Now</button></a>
                                        {/* <button className="">Know More</button> */}
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="text-center mt-14">
                        {/* <p className="why-choose"><span>How It Works?</span></p> */}
                        <p className="why-choose">
                            {/* <TextRevealT text="How It Works?" /> */}
                            {/* <span>
                                How It Works?
                         </span> */}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ExploreCarousel
