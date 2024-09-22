import React, { useEffect, useState } from "react";
import logo from "../assets/banner.png";
import card1 from "../assets/guess.png";
import card2 from "../assets/About-banner.png";
import card3 from "../assets/rolex.png";
import card4 from "../assets/montblanc.png";
import Cards from "./Cards";
import category1 from "../assets/best-sellers.png";
import category2 from "../assets/limited-edition.png";
import category3 from "../assets/premium.png";
import category4 from "../assets/latest.png";
import knowmore from "../assets/seiko.png";
import slider1 from "../assets/slider1.png"
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import autoprefixer from "autoprefixer";

const Home = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div className="home-container" data-aos="fade-up">
      <div className="home-banner bg-cover bg-no-repeat bg-[#001122] text-white h-screen flex items-center justify-start">
        <img src={logo} alt="" className=" h-screen " />
        <div className="banner-content text-center space-y-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-left">
            Crafting Time, Defining Elegance
          </h1>
          <h3 className="text-2xl md:text-3xl text-left">
            Discover the Art of Horology with Timeless - Where Precision Meets
            Passion.
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-left">
            At Timeless, we believe in more than just keeping time. We create
            experiences, tell stories, and capture moments that transcend
            generations. Our watches are a testament to exceptional
            craftsmanship, attention to detail, and the pursuit of perfection.
            Each timepiece is meticulously designed and expertly assembled,
            blending tradition with innovation to bring you the finest in
            watchmaking.
          </p>
          <button className="banner-btn py-2 px-6 border-2 border-white shadow-lg hover:bg-[#0097fb] transition duration-300 mr-[46rem]">
            Explore More
          </button>
        </div>
      </div>

      <div className="feature-section mt-16 text-center" data-aos="fade-up">
        <h1 className="feature-section-title text-[#12223b] text-3xl md:text-4xl font-bold">
          TRENDING
        </h1>

        <div className="feature-section-card flex justify-center gap-4 mt-10">
          <Cards image={card1} name="Guess" price={"$200"} />
          <Cards image={card2} name="Breitling" price={"$175"} />
          <Cards image={card3} name="Rolex" price={"$250"} />
          <Cards image={card4} name="Mont Blanc" price={"$200"} />
          <Cards image={card1} name="Seiko" price={"$200"} />
        </div>
      </div>

      <div
        className="home-category flex gap-4 items-center justify-end mt-20 mr-40"
        data-aos="fade-right"
      >
        <h1 className="text-[#001F3F] font-bold text-4xl mr-36">Categories</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="category-1 group text-center">
            <img
              className=" category-img opacity-80 border-2 border-[#030318] w-60 h-60 object-cover mb-4 group-hover:opacity-100  duration-700"
              src={category1}
              alt=""
            />
            <h2 className=" text-black text-2xl font-bold absolute -mt-40 ml-5 group-hover:text-white  duration-700">
              Latest
            </h2>
          </div>
          <div className="category-2 group text-center">
            <img
              className="category-img opacity-80 border-2 border-[#030318] w-60 h-60 object-cover mb-4 group-hover:opacity-100 transition duration-700"
              src={category2}
              alt=""
            />
            <h2 className="text-black text-2xl font-bold absolute -mt-40 ml-5 group-hover:text-white transition duration-700">
              Limited Edition
            </h2>
          </div>
          <div className="category-3 group text-center">
            <img
              className="category-img opacity-80 border-2 border-[#030318] w-60 h-60 object-cover mb-4 group-hover:opacity-100 transition duration-700"
              src={category3}
              alt=""
            />
            <h2 className="text-black text-2xl font-bold absolute -mt-40 ml-5 group-hover:text-white transition duration-700">
              Premium
            </h2>
          </div>
          <div className="category-4 group text-center">
            <img
              className="category-img opacity-80 border-2 border-[#030318] w-60 h-60 object-cover mb-4 group-hover:opacity-700 transition duration-500"
              src={category4}
              alt=""
            />
            <h2 className="text-black text-2xl font-bold absolute -mt-40 ml-5 group-hover:text-white transition duration-700">
              Best Sellers
            </h2>
          </div>
        </div>
      </div>

      <div className="slider-container h-[100vh] w-full overflow-hidden">
      <Slider {...settings}>
      <img src={logo} alt=""className=" h-[100vh] object-contain bg-black"/>
      <img src={card1} alt=""className=" h-[100vh] object-contain bg-blue-500 "/>
      <img src={card2} alt=""className=" h-[100vh] object-contain bg-gray bg-red-500"/>

      </Slider>
    </div>

      <div className="know-more bg-[#fff] text-[#001122] px-4 md:px-16 mt-16 mb-16 flex flex-col md:flex-row items-center">
        <img
          src={knowmore}
          alt=""
          className="mb-8 md:mb-0 w-full md:w-2/3 bg-cover"
        />
        <div className="know-more-content space-y-8 md:ml-16 max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">TIMELESS</h1>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="py-3 px-6 border-2 border-black shadow-md bg-white text-black hover:shadow-lg hover:bg-gray-100 transition duration-300">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
