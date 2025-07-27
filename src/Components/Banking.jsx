// Banking partners section
export function Banking() {
    // images
    const images = [
        { src: "/images/piramal-finance.png", alt: "piramal-finance", style: "w-[85px] h-[85px] max-d:mb-[-30px]" },
        { src: "/images/icici-bank.png", alt: "icici-bank", style: "w-[135px] h-[35px]" },
        { src: "/images/indusind-bank.png", alt: "indusind-bank", style: "w-[135px] h-[35px]" },
        { src: "/images/kotak-bank.png", alt: "kotak-bank", style: "w-[135px] h-[35px]" },
        { src: "/images/rbl-bank.png", alt: "rbl-bank", style: "w-[135px] h-[35px]" },
        { src: "/images/yes-bank.png", alt: "yes-bank", style: "w-[135px] h-[35px]" }
    ];

    return (
        <div className="min-a:p-6 max-a:p-6 max-c:p-4">
            <h1 className="text-black font-bold text-center min-a:mb-12 max-a:mb-10 max-b:mb-6
            min-a:text-4xl max-a:text-4xl max-c:text-3xl max-c:mb-3 max-d:text-[26px] max-d:mb-0">Our Banking Partners</h1>

            <div className="flex flex-row flex-wrap items-center justify-center p-5 min-a:gap-15 max-a:gap-10 max-b:gap-8 
                max-d:gap-10">
                {images.map((image, idx) => (
                    <img
                        key={idx}
                        className={`${image.style} hover:scale-110 duration-300`}
                        src={image.src} alt={image.alt}>
                    </img>
                ))}
            </div>
        </div>
    )
}