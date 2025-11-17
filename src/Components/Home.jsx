// react icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import swiper elements
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import link
import { Link } from 'react-scroll';

// Home section
export function Home() {
    // images
    const slides = [
        {
            image: "images/Other/business-loan.jpeg",
            heading: "Business Growth Financing",
            text: "Empower your business with our flexible financing options."
        },
        {
            image: "images/Other/home-loan.jpeg",
            heading: "Home Loan Solutions",
            text: "Make your dream home a reality with our flexible plans."
        },
        {
            image: "images/Other/personal-loan.jpeg",
            heading: "Personal Financial Solutions",
            text: "Your dream home is just a loan away with our competitive rates."
        },
        {
            image: "images/Other/insurance.jpeg",
            heading: "Insurance Protection",
            text: "Comprehensive coverage for what matters most to you."
        }
    ];

    return (
        <div className="w-full" id="home">
            <button className="custom-prev absolute top-60 left-4 z-10 -translate-y-1/2 bg-blue-700 text-white max-g:hidden
            min-c:p-3 min-c:text-[16px] max-c:p-2 max-c:text-[14px] rounded-full shadow-md hover:bg-blue-800 cursor-pointer">
                <FaArrowLeft />
            </button>
            <button className="custom-next absolute top-60 right-4 z-10 -translate-y-1/2 bg-blue-700 text-white max-g:hidden
            min-c:p-3 min-c:text-[16px] max-c:p-2 max-c:text-[14px] rounded-full shadow-md hover:bg-blue-800 cursor-pointer">
                <FaArrowRight />
            </button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full min-a:h-[420px] max-a:h-[400px]">
                            <img
                                src={slide.image}
                                alt={slide.heading}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay content */}
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-8
                             text-white">
                                <h2 className="font-bold mb-2 mt-18 min-c:text-3xl max-c:text-[26px] max-d:text-[23px]">
                                    {slide.heading}
                                </h2>
                                <p className="text-center mb-4 min-c:text-lg max-c:text-[16px]">{slide.text}</p>
                                <Link
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    offset={-60}
                                >
                                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded transition 
                                    cursor-pointer">
                                        View Services
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}