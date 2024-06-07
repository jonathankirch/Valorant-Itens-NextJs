// --output_wrapper

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
        <meta name="google-adsense-account" content="ca-pub-9286412141582022"></meta>
        <script
            async
            src="https://fundingchoicesmessages.google.com/i/pub-9286412141582022?ers=1"
            nonce="rGu65o8_T6k0qmLsAgmoYQ"
          ></script>
          <script
            nonce="rGu65o8_T6k0qmLsAgmoYQ"
            dangerouslySetInnerHTML={{
              __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`,
            }}
          ></script>
          
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9286412141582022"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inconsolata.variable} ${oswald.variable}`}>
        <MainContainer>
          {children}  
        </MainContainer>
      </body>
    </html>
  );
}
