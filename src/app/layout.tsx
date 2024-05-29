import MainContainer from "./components/MainContainer";
import "./globals.css";
import { Metadata } from 'next'

import { Inconsolata, Oswald } from 'next/font/google';

const inconsolata = Inconsolata({ subsets: ['latin'], variable: '--font-inconsolata' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: {
    default: "Valorant",
    template: "%s | Valorant"
  },
  description: "Descubra tudo sobre Valorant, o jogo de tiro em primeira pessoa da Riot Games. Saiba mais sobre os agentes, habilidades, mapas e o competitivo vibrante. Junte-se à comunidade, participe de torneios e baixe Valorant gratuitamente.",
  keywords: [
    "Valorant",
    "Valorant Mobile",
    "Valorant Tablet",
    "Valorant Desktop",
    "jogo de tiro",
    "FPS",
    "primeiro pessoa",
    "competitivo",
    "agentes",
    "habilidades únicas",
    "mapas",
    "5x5",
    "objetivos",
    "primeira versão",
    "lançamento",
    "Twitch",
    "sucesso global",
    "Discord",
    "comunidade Valorant",
    "streams",
    "vídeos de gameplay",
    "fanarts",
    "memes",
    "histórias",
    "cenário competitivo",
    "torneios",
    "jogadores profissionais",
    "esportes eletrônicos",
    "baixar Valorant",
    "jogar Valorant",
    "site oficial Valorant",
    "Riot Games"
  ]
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="valorantIcon.ico" type="image/x-icon" />
      </head>
      <body className={`${inconsolata.variable} ${oswald.variable}`}>
        <MainContainer>
          {children}  
        </MainContainer>
      </body>
    </html>
  );
}
