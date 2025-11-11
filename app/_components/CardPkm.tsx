interface IPkmInfo {
    bgColor: string;
    icTyping: string;
    region: string;
    evoLv: number;
}

export const CardPkm = () => {
    return (
        <div className="w-[360px] p-5 bg-[#171717] text-white">
            <div className="row flex justify-between items-center">
                <div className="region/type bg-green-500 w-[50px] h-[50px] rounded-xs">
                    <img src="#" alt="Grama" width={50} height={50} />
                </div>

                <span>Kanto</span>
            </div>

            <div className="first-info ">
                <span>Evolui no nível 16</span>

                <h2>Bulbassauro</h2>
            </div>

        </div>
    )
}