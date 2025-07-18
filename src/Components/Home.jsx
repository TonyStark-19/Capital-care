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
    const images = [
        "images/business-loan.jpeg",
        "images/home-loan.jpeg",
        "images/personal-loan.jpeg",
        "images/insurance.jpeg"
    ];

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="rounded-lg"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={img} alt={`Slide ${idx + 1}`} className="w-full mt-17 h-105 object-cover rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}