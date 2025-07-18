// react icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import swiper elements
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Home section
export function Home() {
    // images
    const slides = [
        {
            image: "images/business-loan.jpeg",
            heading: "Business Growth Financing",
            text: "Empower your business with our flexible financing options.",
            button: "View Services"
        },
        {
            image: "images/home-loan.jpeg",
            heading: "Home Loan Solutions",
            text: "Make your dream home a reality with our flexible plans.",
            button: "View Services"
        },
        {
            image: "images/personal-loan.jpeg",
            heading: "Personal Financial Solutions",
            text: "Your dream home is just a loan away with our competitive rates.",
            button: "View Services"
        },
        {
            image: "images/insurance.jpeg",
            heading: "Insurance Protection",
            text: "Comprehensive coverage for what matters most to you.",
            button: "View Services"
        }
    ];

    return (
        <div className="w-full" id="home">
            <button className="custom-prev absolute top-60 left-4 z-10 -translate-y-1/2 bg-blue-700 text-white p-3 
            rounded-full shadow-md hover:bg-blue-800 cursor-pointer">
                <FaArrowLeft />
            </button>
            <button className="custom-next absolute top-60 right-4 z-10 -translate-y-1/2 bg-blue-700 text-white p-3
            rounded-full shadow-md hover:bg-blue-800 cursor-pointer">
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
                className="rounded-lg"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-[420px]">
                            <img
                                src={slide.image}
                                alt={slide.heading}
                                className="w-full h-full object-cover rounded-lg"
                            />

                            {/* Overlay content */}
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center
                            p-8 text-white rounded-lg">
                                <h2 className="text-3xl font-bold mb-2 mt-18">{slide.heading}</h2>
                                <p className="mb-4 text-lg">{slide.text}</p>
                                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded transition cursor-pointer">
                                    {slide.button}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}