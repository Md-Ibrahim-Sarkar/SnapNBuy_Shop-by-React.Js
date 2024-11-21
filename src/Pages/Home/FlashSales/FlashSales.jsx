import { useEffect, useState, useRef, useContext } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import FlashItem from "./FlashItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { ShopContext } from "../../../Context/Context";

function FlashSales() {
  const { flashData } = useContext(ShopContext);

  // Swiper functionality
  const [isAutoplay, setIsAutoplay] = useState(false);
  const swiperRef = useRef(null);

  const handleSwiperClick = () => setIsAutoplay(!isAutoplay);

  // Timer functionality
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-16">
      <div className="flex items-center gap-4">
        <div className="w-6 h-11 rounded-md bg-main-color"></div>
        <span className="font-bold text-main-color">Today's</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <h2 className="text-4xl py-5 pb-0">Flash Sales</h2>
          {/* Timer */}
          <div className="flex gap-4 text-center">
            {Object.entries(timeLeft).map(([key, value], index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl font-bold">{String(value).padStart(2, "0")}</span>
                <span className="text-sm text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <div
            className="bg-gray-200 w-14 h-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-500 transform transition-all ease-linear duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaLongArrowAltLeft className="w-7 h-7" />
          </div>
          <div
            className="bg-gray-200 w-14 h-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-500 transform transition-all ease-linear duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaLongArrowAltRight className="w-7 h-7" />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        autoplay={isAutoplay ? { delay: 3000, disableOnInteraction: false } : false}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        onClick={handleSwiperClick}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {flashData.length === 0 ? (
          <p className="text-center py-10">No flash sale items available</p>
        ) : (
          flashData.map((item) => (
            <SwiperSlide key={item.id}>
              <FlashItem data={item} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}

export default FlashSales;
