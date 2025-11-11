import IPkmInfo from "../_types/Pokemon"

export const CardPkm = ({ name, dexNum, bgTypingCard, bgTypingCard2, icTyping, icTyping2, evoLv, region, imgUrl }: IPkmInfo) => {
    const IconTyping = icTyping
    const IconTyping2 = icTyping2

    return (
        <div className={`w-[310px] h-[280px] p-4.5 gap-5 overflow-hidden flex flex-col bg-[#171717] text-white duration-300 hover:cursor-pointer ease-in-out hover:ml-3 hover:mr-3 hover:scale-105 shadow-2xl hover:shadow-${bgTypingCard}/20`}>
            <div className="row flex justify-between items-center">
                <div className="types flex gap-2">
                    <div className={`type1 w-[35px] h-[35px] flex items-center justify-center rounded-xs bg-${bgTypingCard}`}>
                        {IconTyping}
                    </div>
                    
                    <div className={`type2 w-[35px] h-[35px] flex items-center justify-center rounded-xs bg-${bgTypingCard2}`}>
                        {IconTyping2}
                    </div>
                </div>

                <span className="text-[#CACCCE]"># {dexNum}</span>
            </div>

            <div className="content w-full h-full flex">
                <div className="left w-full h-full flex flex-col justify-between">
                    <div className="first-info h-full flex flex-col justify-center">
                        {evoLv === 0
                            ? <span className="text-[13px] text-[#CACCCE]">Não evolui</span>
                            : <span className="text-[13px] text-[#CACCCE]">Evolui no nível {evoLv}</span>
                        }

                        <h2 className="text-xl">{name}</h2>
                    </div>

                    <span className="text-sm text-[#86888A]">Da Região de {region}</span>
                </div>
                
                <div className="right w-full h-full mt-3">
                    <img src={`${imgUrl}`} alt="" width={250} height={250} />
                </div>
            </div>
        </div>
    )
}