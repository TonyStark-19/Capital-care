// import use effect
import { useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Banking partners section
export function Banking() {
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    // images
    const images = [
        { src: "/images/Banks/piramal-finance.png", alt: "piramal-finance", style: "w-[85px] h-[85px] min-b:mb-2 max-d:mb-[-30px]" },
        { src: "/images/Banks/icici-bank.png", alt: "icici-bank", style: "min-f:w-[135px] max-f:w-[110px] h-[35px] max-d:mb-[-30px]" },
        { src: "/images/Banks/indusind-bank.png", alt: "indusind-bank", style: "min-f:w-[135px] max-f:w-[110px] h-[35px]" },
        { src: "/images/Banks/kotak-bank.png", alt: "kotak-bank", style: "min-f:w-[135px] max-f:w-[110px] h-[35px]" },
        { src: "/images/Banks/rbl-bank.png", alt: "rbl-bank", style: "min-f:w-[135px] max-f:w-[110px] h-[35px]" },
        { src: "/images/Banks/yes-bank.png", alt: "yes-bank", style: "min-f:w-[135px] max-f:w-[110px] h-[35px]" }
    ];

    return (
        <div className="min-a:p-6 max-a:p-6 max-c:p-4">
            <h1 className="text-black font-bold text-center min-a:mb-12 max-a:mb-10 max-b:mb-6 min-a:text-4xl max-a:text-4xl
             max-c:text-3xl max-d:text-[26px]" data-aos="fade-up" data-aos-duration="1000">Our Banking Partners</h1>

            <div className="flex justify-center items-center">
                <div className="flex flex-row flex-wrap items-center justify-center p-3 min-a:gap-15 max-a:gap-10 max-b:gap-8 
                max-c:gap-5 max-d:gap-10 shadow-md min-a:w-[80%] max-a:w-[90%] rounded-md"
                    data-aos="fade-up" data-aos-duration="1000">
                    {images.map((image, idx) => (
                        <img
                            key={idx}
                            className={`${image.style} hover:scale-110 duration-300`}
                            src={image.src} alt={image.alt}>
                        </img>
                    ))}
                </div>
            </div>
        </div>
    )
}