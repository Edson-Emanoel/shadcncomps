import { FlameIcon, LeafIcon, SkullIcon } from "lucide-react";

export const pokemons = [
    {
      dexNum: "001",
      name: "Bulbassauro",
      bgTypingCard: "green-500",
      bgTypingCard2: "purple-600",
      evoLv: 16,
      icTyping: <LeafIcon width={22} height={22}  />,
      icTyping2: <SkullIcon width={22} height={22}  />,
      region: "Kanto",
      imgUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
    },
    {
      dexNum: "002",
      name: "Ivyssauro",
      bgTypingCard: "green-500",
      bgTypingCard2: "purple-600",
      evoLv: 32,
      icTyping: <LeafIcon width={22} height={22}  />,
      icTyping2: <SkullIcon width={22} height={22}  />,
      region: "Kanto",
      imgUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png"
    },
    {
      dexNum: "003",
      name: "Venossauro",
      bgTypingCard: "green-500",
      bgTypingCard2: "purple-600",
      evoLv: 0,
      icTyping: <LeafIcon width={22} height={22}  />,
      icTyping2: <SkullIcon width={22} height={22}  />,
      region: "Kanto",
      imgUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png"
    },
    {
      dexNum: "004",
      name: "Charmander",
      bgTypingCard: "red-600",
      bgTypingCard2: "red-600",
      evoLv: 16,
      icTyping: <FlameIcon width={22} height={22}  />,
      icTyping2: <FlameIcon width={22} height={22}  />,
      region: "Kanto",
      imgUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
    },
  ]