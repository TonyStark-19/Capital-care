// Banking partners section
export function Banking() {
    return (
        <div className="p-6">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Our Banking Partners</h1>

            <div className="flex flex-row items-center justify-center gap-15 p-5">
                <img className="w-[80px] h-[80px] hover:scale-110 duration-300" src="/images/piramal-finance.png" alt="bank1"></img>
                <img className="w-[135px] h-[35px] hover:scale-110 duration-300" src="/images/icici-bank.png" alt="bank2"></img>
                <img className="w-[135px] h-[35px] hover:scale-110 duration-300" src="/images/indusind-bank.png" alt="bank3"></img>
                <img className="w-[135px] h-[35px] hover:scale-110 duration-300" src="/images/kotak-bank.png" alt="bank4"></img>
                <img className="w-[135px] h-[35px] hover:scale-110 duration-300" src="/images/rbl-bank.png" alt="bank5"></img>
                <img className="w-[135px] h-[35px] hover:scale-110 duration-300" src="/images/yes-bank.png" alt="bank6"></img>
            </div>
        </div>
    )
}