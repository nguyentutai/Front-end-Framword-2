import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Utils/Button";

const Banner = () => {
  const sliderRef = useRef<Slider>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    console.log("1");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const BannerArray = [
    {
      id: 1,
      title: "Game Console Nintendo Switch",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut saepe adipisci",
      bannerUrl:
        "https://hex-wp.com/gamemart/wp-content/uploads/2024/03/homepage_3_slider_1_item_2.jpg",
      image:
        "https://res.cloudinary.com/drz5kdrm5/image/upload/v1721756960/hard_image_2-600x600-removebg-preview_pmzgte.png",
    },
    {
      id: 2,
      title: "Game Console Nintendo Switch",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut saepe adipisci",
      bannerUrl:
        "https://hex-wp.com/gamemart/wp-content/uploads/2024/03/homepage_3_slider_1_item_1.jpg",
      image:
        "https://res.cloudinary.com/drz5kdrm5/image/upload/v1721757042/hard_image_15-removebg-preview_odlua3.png",
    },
  ];

  return (
    <div className="mt-2 relative w-full">
      {/* <img
        className="w-full"
        src="https://hex-wp.com/gamemart/wp-content/uploads/2024/03/homepage_3_slider_1_item_1.jpg"
        alt=""
      /> */}
      <Slider {...settings} ref={sliderRef} className="w-full">
        {BannerArray.map((item, index) => (
          <div key={index} className="relative">
            <div className="w-full">
              <img className="w-full" src={item.bannerUrl} alt="" />
            </div>
            <div className="absolute top-[20%] left-[50%] translate-x-[-50%] flex gap-16">
              <div>
                <h3 className="text-[40px] text-white font-bold">
                  {item.title}
                </h3>
                <p className="text-white text-md">{item.content}</p>
                <div className="mt-10">
                  <Button content="Shop Now" color="bg-white" />
                </div>
              </div>
              <div className="-mt-16">
                <img src={item.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="" style={{ textAlign: "center" }}>
        <div
          className="absolute top-[44%] left-[3%] bg-white rounded-full p-1.5 cursor-pointer"
          onClick={previous}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="size-8"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </div>
        <div
          className="absolute top-[44%] right-[3%] bg-white rounded-full p-1.5 cursor-pointer"
          onClick={next}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="size-8"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
