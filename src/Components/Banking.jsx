// Banking partners section
export function Banking() {
    // images
    const images = [
        { src: "/images/piramal-finance.png", alt: "piramal-finance", style: "w-[85px] h-[85px]" },
        { src: "/images/icici-bank.png", alt: "icici-bank", style: "w-[135px] h-[35px]" },
        { src: "/images/indusind-bank.png", alt: "indusind-bank", style: "w-[135px] h-[35px]" },
        { src: "/images/kotak-bank.png", alt: "kotak-bank", style: "w-[135px] h-[35px]" },
        { src: "/images/rbl-bank.png", alt: "rbl-bank", style: "w-[135px] h-[35px]" },
        { src: "/images/yes-bank.png", alt: "yes-bank", style: "w-[135px] h-[35px]" }
    ];

    return (
        <div className="p-6">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Our Banking Partners</h1>

            <div className="flex flex-row items-center justify-center gap-15 p-5">
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