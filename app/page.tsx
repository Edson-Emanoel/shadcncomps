import { pokemons } from "./data/pokemons";
import { CardPkm } from "./_components/CardPkm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] font-sans">
      <div className="flex flex-col">
        <div className="gap-3 flex flex-row">
          {pokemons.map((pkm) => (
            <CardPkm
              key={pkm.dexNum}
              name={pkm.name}
              dexNum={pkm.dexNum}
              bgTypingCard={pkm.bgTypingCard}
              bgTypingCard2={pkm.bgTypingCard2}
              evoLv={pkm.evoLv}
              icTyping={pkm.icTyping}
              icTyping2={pkm.icTyping2}
              region={pkm.region}
              imgUrl={pkm.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
